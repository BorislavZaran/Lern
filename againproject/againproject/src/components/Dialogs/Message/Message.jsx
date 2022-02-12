import React from "react";
import st from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={st.messages}>
            {props.message}
        </div>
    )
}

export default Message;