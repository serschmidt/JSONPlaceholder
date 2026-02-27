// src/App.tsx
import './App.css';

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Meine App</h1>
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <nav>
            <ul>
              <li>Menüpunkt 1</li>
              <li>Menüpunkt 2</li>
              <li>Menüpunkt 3</li>
            </ul>
          </nav>
        </aside>

        <main className="app-main">
          <h2>Hauptinhalt</h2>
          <p>Hier steht dein Content.</p>
        </main>
      </div>

      <footer className="app-footer">
        <small>© 2026 Meine App</small>
      </footer>
    </div>
  );
}

export default App;
