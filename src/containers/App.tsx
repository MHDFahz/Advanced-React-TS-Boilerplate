import React from "react";
import ReduxToastr from "react-redux-toastr";
import { withRouter } from "react-router-dom";

import Routes from "./routes/Routes";

import "../styles/base.scss";

const App: React.FC = () => {
  return (
    <div>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={false}
      />
      <Routes />
    </div>
  );
};

// without using withRouter, route changes only reflect in url but not on page.
export default withRouter(App);
