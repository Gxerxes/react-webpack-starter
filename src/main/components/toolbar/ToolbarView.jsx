import React from 'react'

import { Button } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import { sendMsg } from './toolbarActions'

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
        //background: 'red',
        display: 'flex',
        flexDirection: 'column'
    }
};

export default class Toolbar extends React.Component {
    render() {
        return (
            // <div style={styles.buttonGrp}></div>
        <div style={styles.buttonGrp}>
            <Button.Group>
              <Button icon="fa fa-plus-square" />
              <Button icon="fa fa-plus-square" />
              <Button icon="fa fa-plus-square" />
              <Button icon="fa fa-plus-square" />
            </Button.Group>
            {" "}
            <Button.Group>
              <Button icon="fa fa-plus-square" />
              <Button icon="fa fa-plus-square" />
              <Button icon="fa fa-plus-square" />
            </Button.Group>
        </div>
        )
    }
}
