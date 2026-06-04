// submit.js

import { useState } from 'react';
import { useStore } from './store';
import { PipelineResultModal } from './components/PipelineResultModal';

const API_URL = 'http://localhost:8000/pipelines/parse';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
      setError(null);
      setModalOpen(true);
    } catch {
      setResult(null);
      setError({
        message: 'Could not submit the pipeline.',
        details:
          'Make sure the backend is running:\n\ncd backend\nuvicorn main:app --reload',
      });
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="canvas-footer">
        <button
          type="button"
          className="btn-submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Submitting…</>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              Run Pipeline
            </>
          )}
        </button>
      </div>

      <PipelineResultModal
        isOpen={modalOpen}
        onClose={closeModal}
        result={result}
        error={error}
      />
    </>
  );
};
