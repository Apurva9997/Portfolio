import React from 'react';
import './styles.scss';

export default function () {
  return (
    <div className="api_loading_screen">
      <div className="api_loading_screen__content">
        <img src="assets/loader-1.light.svg" />
        <p className="api_loading_screen__content__message">Loading ...</p>
      </div>
    </div>
  )
}