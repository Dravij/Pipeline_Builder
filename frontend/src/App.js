import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <header className="app-header">
          <div className="app-header__brand">
            <div className="app-header__logo">V</div>
            <span className="app-header__title">VectorShift</span>
            <span className="app-header__subtitle">Pipeline Builder</span>
          </div>
          <div className="app-header__actions">
            <ThemeToggle />
          </div>
        </header>
        <div className="app-body">
          <PipelineToolbar />
          <div className="app-canvas">
            <PipelineUI />
            <SubmitButton />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
