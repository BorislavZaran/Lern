import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./Profile/ProfileInfo";
import st from './Profile.module.css';

const Profile = (props) => {
    return  <div className={st.Profile}>
                <ProfileInfo/>
                <MyPosts posts = {props.state.posts} addPost = {props.addPost} />
            </div>   
}

export default Profile;