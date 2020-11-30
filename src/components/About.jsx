import React from 'react'
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {counter: 0}
    };
    UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    }
    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    UNSAFE_componentWillReceiveProps(oldProps) {
        console.log("componentWillReceiveProps", oldProps, this.props);
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    componentDidUpdate() {
        console.log("Component did update");
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
  render() {
      console.log("render");
      const clickHandler = () => {
          this.setState({ counter: this.state.counter + 1 });
      };
      return (
          <div>
              <h1>About</h1>
              <button onClick={clickHandler}>
                  {this.state.counter}
              </button>
          </div>
      );
  }
}

export default About;
