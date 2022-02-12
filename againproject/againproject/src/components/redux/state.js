import rerenderEntireTree from "./render";

let state = {
    profilePage: {
        posts: [  
            {id: 1, message: 'Bla-bla', likesCount: 0},
            {id: 2, message: 'Not bla-bla', likesCount: 0},
            {id: 3, message: 'Po bla-blakay mne tyt', likesCount: 0},
            ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Алина'},
            {id: 2, name: 'Дмитрий'},
            {id: 3, name: 'Алексей'},
            {id: 4, name: 'Андрей'},
            {id: 5, name: 'Артур'}
            ],
        messages: [
            {id: 1, message: 'Привет) как дела?'},
            {id: 1, message: 'Привет) все хорошо, у тебя как?)'},
            {id: 1, message: 'Привет) тоже хорошо))'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0,
        };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    }

export default state;