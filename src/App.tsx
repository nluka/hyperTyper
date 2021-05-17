import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import GameArea from './components/GameArea/GameArea';
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
      <GameArea />
    </>
  );
};

export default App;
