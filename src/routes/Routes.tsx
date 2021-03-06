import { UsernameContext } from 'providers/UsernameProvider';
import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GameView from 'views/GameView/GameView';
import PageNotFound from 'views/PageNotFound/PageNotFound';
import ScoreView from 'views/scoreView/ScoreView';
import UsernameView from 'views/UsernameView/UsernameView';

const Routes = () => {
  const { username } = useContext(UsernameContext);

  return (
    <Switch>
      <Route exact path='/'>
        <UsernameView />
      </Route>
      <Route path='/game'>
        {username ? <GameView /> : <Redirect to='/' />}
      </Route>
      <Route path='/score'>
        {username ? <ScoreView /> : <Redirect to='/' />}
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
