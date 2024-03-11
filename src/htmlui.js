// revohtmlui.js
const express = require('express');

class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    // 컴포넌트 렌더링 로직
  }
}

const RevoHTMLUI = {
  createServer(port, routes) {
    const app = express();
    app.use(express.static('public')); // 정적 파일 제공

    Object.keys(routes).forEach(path => {
      app.get(path, (req, res) => {
        const component = routes[path]();
        res.send(component.render());
      });
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  },

  defineComponent(componentClass) {
    return props => new componentClass(props);
  }
};

module.exports = RevoHTMLUI;
