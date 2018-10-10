import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answer:42};
  }

  asyncFunc(){
    return Promise.resolve(86);
  }

  // async / await here requires the @babel/polyfill plugin
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  };

  render(){
    return (
      <h2>Hello Class Components -- {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
