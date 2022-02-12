import React from "react";
import { NavLink } from "react-router-dom";
import st from './MyPosts.module.css';

const Post = (props) => {
    let pathPost = "/profile/" + props.id;
    return (
        <div>
            <img src={require("./Post/img/ava1.jpg")} alt="Ava"/>
            <NavLink to={pathPost}>{props.message + " " + props.likesCount}</NavLink>
        </div>
    )
}
const MyPosts = (props) => {
    
    let postsElements = props.posts.map ( p => <Post message = {p.message} likesCount = {p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost (text);
        newPostElement.current.value='';
    }

    return  (
            <div className={st.MyPosts}>
                <p>Моя старница</p>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick = {addPost}>Опубликовать</button>
                    </div>
                </div>
                <div className={st.post}>
                    { postsElements }
                </div>
            </div>
    )
}

export default MyPosts;