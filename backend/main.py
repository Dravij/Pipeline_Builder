from collections import defaultdict, deque

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: list[dict] = []
    edges: list[dict] = []


class PipelineParseResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool


def is_dag(node_ids: list[str], edges: list[dict]) -> bool:
    """Return True if the pipeline graph has no directed cycles (Kahn's algorithm)."""
    if not node_ids:
        return True

    in_degree = {node_id: 0 for node_id in node_ids}
    graph = defaultdict(list)

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source not in in_degree or target not in in_degree:
            continue
        graph[source].append(target)
        in_degree[target] += 1

    queue = deque(node_id for node_id in node_ids if in_degree[node_id] == 0)
    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(node_ids)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse", response_model=PipelineParseResponse)
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    node_ids = [node["id"] for node in pipeline.nodes if node.get("id") is not None]

    return PipelineParseResponse(
        num_nodes=num_nodes,
        num_edges=num_edges,
        is_dag=is_dag(node_ids, pipeline.edges),
    )
