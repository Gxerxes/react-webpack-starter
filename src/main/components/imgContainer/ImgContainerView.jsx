import React from 'react';

import Toolbar from '../toolbar/ToolbarView';

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

export default class ImgContainer extends React.Component {
  render() {
    return (
        <div style={styles.base}>     
            <img src="http://img1.3lian.com/2015/a1/46/d/198.jpg" style={styles.img} />
            <span style={styles.center}>DMViewer</span>
            <Toolbar />
        </div>
    )
  }
}

// const ImgContainer = () => {

// };

// export default ImgContainer;
