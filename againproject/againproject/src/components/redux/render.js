import App from '../App.js';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from '../redux/state.js';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

export default rerenderEntireTree;