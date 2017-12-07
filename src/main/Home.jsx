import React from 'react'

const styles = {
    base: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    }
}

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {color: "black"}
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            color: this.randomColor()
          });
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
        return(
          <div style={styles.base}>
            <h1 style={fontStyle.fontColor}>Welcome to DMViewer<i className="smile icon"></i></h1>
          </div>
        )
    }
}

