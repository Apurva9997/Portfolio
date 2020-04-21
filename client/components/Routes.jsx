import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function () {
  return (
    <Router>
      <Suspense fallback={}>

      </Suspense>
    </Router>
  )
}