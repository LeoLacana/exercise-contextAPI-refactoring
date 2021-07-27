// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './context/MyContext';

class Cars extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          ({ cars: { red, blue, yellow }, moveCar }) => {
            return (
              <div>
                <div>
                  <img
                    className={red ? 'car-right' : 'car-left'}
                    src={carRed}
                    alt="red car"
                  />
                  <button
                    onClick={() => moveCar('red', !red)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
                <div>
                  <img
                    className={blue ? 'car-right' : 'car-left'}
                    src={carBlue}
                    alt="blue car"
                  />
                  <button
                    onClick={() => moveCar('blue', !blue)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
                <div>
                  <img
                    className={yellow ? 'car-right' : 'car-left'}
                    src={carYellow}
                    alt="yellow car"
                  />
                  <button
                    onClick={() => moveCar('yellow', !yellow)}
                    type="button"
                  >
                    Move
                  </button>
                </div>
              </div>
            );
          }
        } 
    </MyContext.Consumer>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

/* const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow});

const mapDispatchToProps = { moveCar }; */

export default Cars;
