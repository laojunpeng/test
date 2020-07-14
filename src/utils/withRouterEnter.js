import React from 'react';
export default function (DefaultComponent, routes, props) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.loading = false;
    }
    render() {
      if (!this.loading) {
        return <DefaultComponent {...props} routes={routes}></DefaultComponent>;
      }
      //loading为true时，可渲染loading组件
    }
  };
}
