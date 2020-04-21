import React, { Suspense } from 'react';
import OnGoingApiRequestLoader from '../components/Loader/views/desktop/OnGoingApiRequestLoader';
const Home = React.lazy(() => import('../pages/Home/views/desktop/Home'));
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function () {
  return (
    <Router>
      <Suspense fallback={<OnGoingApiRequestLoader />}>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='*' component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router >
  )
}