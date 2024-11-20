import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './pages/accueil/Accueil';
import Services from './pages/services/Services';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';

const App = () => {
  return (
    <Router>
      <div>
        {/* Header component here */}
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/services" component={Services} />
          <Route path="/realizations" component={Realizations} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
        {/* Footer component here */}
      </div>
    </Router>
  );
};

export default App;
