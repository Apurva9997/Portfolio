import React from 'react';
import { Spin } from '../../utils/ant.imports';
import '../../styles/loader.less';
import 'antd/es/spin/style/index.less';

export default function () {
  return (
    <div className="api_loading_screen">
      <div className="api_loading_screen__content">
        <Spin size="large" />
        <p className="api_loading_screen__content__message">Loading ...</p>
      </div>
    </div>
  )
}