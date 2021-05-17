import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/practice'></Route>
          <Route path='/statistics'></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
