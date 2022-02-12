import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messageElement = props.state.messages.map ( message => <Message message={message.message}/>);

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                { dialogsElement}
            </div>
            <div className={st.messages}>
                { messageElement }
            </div>
        </div>
    )
}

export default Dialogs;