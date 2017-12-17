import React from 'react';

import Toolbar from '../toolbar/ToolbarView';

import { connect } from 'react-redux';

const styles = {
  base: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  center: {
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
    // width: '100%'
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

class ImgContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
    // console.log('loaded');
    this.props.onImageLoaded(this.props.imageLoaded);
  }

  handleImageErrored() {
    this.setState({ imageLoaded: false })
  }

  render() {
    return (
      <div style={styles.base}>
        <img src="http://img1.3lian.com/2015/a1/46/d/198.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
          style={styles.img} />
        <span style={styles.center}>DMViewer</span>
        <Toolbar />
      </div>
    )
  }
}

// const ImgContainer = () => {

// };

const mapDispatchToProps = (dispath, ownProps) => ({
  onImageLoaded: () => dispath({
    type: 'IMG_LOAD',
    imageLoaded: true
  })
})

export default connect(null, null)(ImgContainer);
