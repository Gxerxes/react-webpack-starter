import React from 'react'

import ImgContainer from './components/imgContainer/imgContainerView'
import { setTimeout } from 'timers'
import Counter from './components/counter/CounterView'

const styles = {
  base: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  fontColor: {
    color: 'black'
  }
}

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "blue"
    }
  }

  // getInitialState() {
  //     return {color: 'blue'}
  // }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  door = true;
  tick() {
    this.setState({
      color: this.randomColor()
    });
    // if(this.door) {
    //     this.setState({
    //         color: 'black'
    //       });
    //     this.door = false;
    // }
    // else {
    //     this.setState({
    //         color: 'blue'
    //     });
    //     this.door = true;
    // }
  }

  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  render() {
    let fontStyle = {
      fontColor: {
        color: this.state.color
      }
    }
    return (
      <div style={styles.base}>
        {/* <ImgContainer /> */}
        <Counter />
        <h1 style={fontStyle.fontColor}>Welcome to DMViewer<i className="smile icon"></i></h1>
      </div>
    )
  }
}

