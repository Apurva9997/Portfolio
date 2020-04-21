import React from 'react';
import Introduction from '../../../../components/Introduction/views/desktop/Introduction';
import WorkBragger from '../../../../components/WorkBragger/views/desktop/WorkBragger';

export default function (props) {
  return (
    <div className="home__container">
      <Introduction />
      <WorkBragger />
    </div>
  )
};