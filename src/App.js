import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import carsContext from './carsContext';

class App extends Component {
  constructor() {
    super();

    this.moveCar = this.moveCar.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
  }

  moveCar(car, side) {
    this.setState((prevState) => ({ cars: { ...prevState.cars, [car]: side } }))
  }

  render() {
    return (
      <carsContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        <Cars />
      </carsContext.Provider>
    );
  }
}

export default App;
