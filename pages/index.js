import React, { Component } from "react";

import { init } from "@sentry/browser";

class Homepage extends Component {
  componentDidMount() {
    init({
      dsn: "xxx"
    });
    document.addEventListener("click", undefined);
  }

  render() {
    return (
      <div>
        <button>Test</button>
      </div>
    );
  }
}

export default Homepage;
