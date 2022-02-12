import React from "react";
import st from './Post1.module.css';

const Post1 = (props) => {
    return  <div className={st.post1}>
                <div className={st.ava1}>
                    <img src={require("./img/ava1.jpg")} alt="ava"/>
                </div>
                <div className={st.text}>
                    { props.message }
                </div>
                <button className="but">Like</button> { props.likesCount }
            </div>
}

export default Post1;