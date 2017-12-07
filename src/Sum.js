import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(props) {
    super(props);

    const { a, b } = props; 

    this.state = {
      value: a + b
    };

    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleSquare = this.handleSquare.bind(this);
  }

  handleMultiply(event) {
    this.setState({
      value: 2 * this.state.value
    });
  }

  handleSquare(event) {
    this.setState({
      value: this.state.value * this.state.value
    });
  }

  render() {
    const { a, b } = this.props;
    const { value } = this.state;

    return (
      <div className="sum">
        <p>
          The sum of {a} + {b} is {value}
        </p>
        <button onClick={this.handleMultiply} className="multiply">MOAR</button>
        <button onClick={this.handleSquare} className="square">I SAID MOOOOOOOAAAAAAAAAAAAR!!!</button>        
      </div>
    );
  }
}