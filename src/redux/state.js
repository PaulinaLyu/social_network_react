const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const store = {
    _state: {
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
    },
    _callSubscriber() {},
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                name: 'Polina Lyu',
                text: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.unshift(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => 
    ({type: UPDATE_POST_TEXT, newText: text});

export default store;