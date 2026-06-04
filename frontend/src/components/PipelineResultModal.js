// PipelineResultModal.js
// Custom on-screen popup for pipeline analysis results.

import { useEffect } from 'react';

export const PipelineResultModal = ({ isOpen, onClose, result, error }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="presentation">
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pipeline-modal-title"
      >
        <div className="modal-header">
          <div className="modal-header__icon">
            {error ? '⚠' : '◈'}
          </div>
          <h2 id="pipeline-modal-title" className="modal-header__title">
            {error ? 'Submission Failed' : 'Pipeline Analysis'}
          </h2>
        </div>

        <div className="modal-body">
          {error ? (
            <>
              <p className="modal-message modal-message--error">{error.message}</p>
              {error.details && (
                <pre className="modal-code">{error.details}</pre>
              )}
            </>
          ) : (
            <>
              <div className="modal-stat">
                <span className="modal-stat__label">Number of nodes</span>
                <span className="modal-stat__value">{result.num_nodes}</span>
              </div>
              <div className="modal-stat">
                <span className="modal-stat__label">Number of edges</span>
                <span className="modal-stat__value">{result.num_edges}</span>
              </div>
              <div className="modal-stat">
                <span className="modal-stat__label">Is valid DAG</span>
                <span
                  className={`modal-badge ${
                    result.is_dag ? 'modal-badge--success' : 'modal-badge--error'
                  }`}
                >
                  {result.is_dag ? 'Yes ✓' : 'No ✗'}
                </span>
              </div>
              <p
                className={`modal-message ${
                  result.is_dag ? 'modal-message--success' : 'modal-message--error'
                }`}
              >
                {result.is_dag
                  ? 'Your pipeline has no cycles and is a valid directed acyclic graph.'
                  : 'Your pipeline contains a cycle and is not a valid DAG.'}
              </p>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-modal-close" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
