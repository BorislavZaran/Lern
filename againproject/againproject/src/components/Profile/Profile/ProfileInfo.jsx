import React from "react";
import st from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return  <div className={st.ProfileInfo}>
                <div> 
                    <img className={st.img} src={require("./img/splashscr.jpg")} alt="barbell"/>
                </div>
                <div className={st.descriptionBlock}>
                    ava + descript
                </div>
            </div>   
}

export default ProfileInfo;