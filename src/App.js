import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './context/MyContext';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.handleMoveCar = this.handleMoveCar.bind(this);
  }

  handleMoveCar(car, side) {
    this.setState({ 
      cars: { [ car ]: side }
    });
  }

  render() {
    const contextState = {
      cars: this.state.cars,
      moveCar: this.handleMoveCar,
    }
    return (
      <MyContext.Provider value={ contextState }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
