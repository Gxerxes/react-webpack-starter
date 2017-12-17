import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increaseAction, decreaseAction } from './counterAction'

const mapStateToProps = state => ({
  value: state.count
});

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increaseAction),
  onDecreaseClick: () => dispatch(decreaseAction)
})


class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props,
      btnStyle = {
        width: '110px',
        height: '30px',
        color: '#fff',
        backgroundColor: 'green',
        border: '1px solid green',
        borderRadius: '5px',
        cursor: 'pointer'
      },
      textStyle = {
        fontSize: '20px'
      };

    return (
      <div>
        <span style={textStyle}>{value}</span>
        <br />
        <button style={btnStyle} type="button" onClick={onIncreaseClick}>Increase</button>
        <button style={btnStyle} type="button" onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
