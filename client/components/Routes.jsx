import React, { Suspense } from 'react';
import { ThemeProvider } from '../config/theme/theme.provider';
import OnGoingApiRequestLoader from '../components/Loader/views/desktop/OnGoingApiRequestLoader';
const Home = React.lazy(() => import('../pages/Home/views/desktop/Home'));
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const themes = {
  dark: {
    global: true,
    foreGround: 'white',
    backGround: 'rgba(0,0,0,0.6)'
  },
  custom: {
    global: false,
    introductionBackground: 'rgba(0,0,0,0.6)',
    introductionNameColor: 'white',
    introductionDesignationColor: 'white',
    introductionCompanyColor: 'white',
    introductionProfilePicPaddingRight: '20px',
    introductionProfilePicWidth: '225px',
    introductionProfilePicHeight: '225px',
    workSectionBackgroundColor: 'rgba(0,0,0,0.6)',
    workSectionTitleColor: 'white',
    workSectionAttributeFontsize: '16px',
    workSectionAttributeColor: 'white',
  }
};

export default function () {
  return (
    <Router>
      <Suspense fallback={<OnGoingApiRequestLoader />}>
        <ThemeProvider value={themes.custom}>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='*' component={() => <div>Not Found</div>} />
          </Switch>
        </ThemeProvider>
      </Suspense>
    </Router >
  )
}