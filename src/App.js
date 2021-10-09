import Home from './pages/Home'
import BookDescription from './pages/BookDescription'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Switch>
        <Route component={BookDescription} path="/details" />
        <Route component={Home} path="/" exact={true} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
