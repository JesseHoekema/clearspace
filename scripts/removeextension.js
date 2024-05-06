import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* Voeg meer routes toe voor andere pagina's */}
    </Router>
  );
}
