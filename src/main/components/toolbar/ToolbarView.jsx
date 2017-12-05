import React from 'react'
import { connect } from 'react-redux'
import { sendMsg } from './toolbarActions'

// const View = ({ btName, sendMsg }) => (

//     <button onClick={sendMsg}>{btName}</button>
// )
// const dispatchMapPros = (dispath, props) => ({
//     sendMsg: () => dispath(sendMsg(props.btName))
// })
// export default connect(null, dispatchMapPros)(View);

const styles = {
    buttonGrp: {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        width: '20px',
        height: '260px',
        background: 'red'
    }
};

export default class Toolbar extends React.Component {
    render() {
        return (
            <div style={styles.buttonGrp}></div>
        )
    }
}
