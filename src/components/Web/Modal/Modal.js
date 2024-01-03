import React, { Component } from "react";
import Portal from '../Portal/Portal';

export default class Modal extends Component {
    render() {
        const { children, toggle, active } = this.props;

        return(
            <Portal>
                {active && (
                    <div style = {styles.wrapper}>
                        <div style = {styles.backgroundfixed} onClick={toggle}></div>
                        <div style = {styles.modal}>{children}</div>
                    </div>
                )}
            </Portal>
        )
    }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundfixed: {
        backgroundColor: "black",
        opacity: '50%',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        position: "fixed",
        zIndex: "1",
    },
}