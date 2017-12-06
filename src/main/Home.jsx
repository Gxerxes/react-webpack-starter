import React from 'react'

import ImgContainer from './components/imgContainer/imgContainerView'

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
    render() {
        return(
          <div style={styles.base}>
            {/* <ImgContainer /> */}
            <h1 style={styles.fontColor}>Welcome to DMViewer</h1>
          </div>
        )
    }
}
