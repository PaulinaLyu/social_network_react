let renderDom = () => {};

const state = {
    profilePage: {
        posts: [
            {id: 1, name: 'Donna Hayward', likesCount: 12, text: 'Owls'},
            {id: 2, name: 'Dale Cooper', likesCount: 100, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
            {id: 3, name: 'Audrey Horne', likesCount: 50, text: 'Hi, Dear Laura'},
            {id: 4, name: 'Laura Palmer', likesCount: 74, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
            {id: 5, name: 'James Hurley', likesCount: 3, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
            {id: 6, name: 'Norma Jennings', likesCount: 89, text: 'Dolce Gusto'}
        ],
        newPostText: ''
    },
    dialogsPage: {
        contacts: [
            {id: 1, name: 'Donna Hayward'},
            {id: 2, name: 'Dale Cooper'},
            {id: 3, name: 'Audrey Horne'},
            {id: 4, name: 'Laura Palmer'},
            {id: 5, name: 'James Hurley'},
            {id: 6, name: 'Norma Jennings'}
        ]
    }
}

export const addPost = () => {
    const newPost = {
        id: 5,
        name: 'Polina Lyu',
        text: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.unshift(newPost);
    renderDom(state);
};

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderDom(state);
};

export const subscribe = (observer) => renderDom = observer;

export default state;