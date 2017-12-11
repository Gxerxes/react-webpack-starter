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
        width: '40px',
        height: '260px',
        //background: 'red',
        display: 'flex',
        flexDirection: 'column'
    }
};

export default class Toolbar extends React.Component {

    static defaultProps = {
        name: 'stranger'
    }

    render() {
        return (
            // <div style={styles.buttonGrp}></div>
        <div style={styles.buttonGrp}>
            <Button.Group vertical>
              <Button icon="align left" />
              <Button icon="align center"/>
              <Button icon="align right" />
              <Button icon="align justify" />
            </Button.Group>
            {" "}
            <Button.Group vertical>
              <Button icon="bold" />
              <Button icon="underline" />
              <Button icon="text width" />
            </Button.Group>
        </div>
        )
    }
}
