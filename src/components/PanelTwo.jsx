//class component
import React, { Component } from 'react';

export default class PanelTwo extends Component {
  //   state = {
  //     counter: 42,
  //     };

  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.title = 'Panou nou';
  }

  render() {
    // const title = 'Panou Nou';
    // console.dir(this.props);
    const { index } = this.props;
    // let state = 1;

    return (
      <div>
        <h2>{this.title}</h2>
        {/* <h3>Index {this.props.index}</h3> */}
        <h3>Index {index}</h3>
        <p>Panel Class Component</p>
        <h1>EXERCITIUL 2</h1>
        <h4>Numaratoare: {this.state.counter}</h4>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
            // state = 1;
            // console.log(`Starea este ${state}`);
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
