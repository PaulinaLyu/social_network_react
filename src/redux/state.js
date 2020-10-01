import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';

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
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hallo'},
                {id: 3, message: 'Shaman King 2021'},
                {id: 4, message: 'I am waiting for you'},
                {id: 5, message: 'Go'},
                {id: 6, message: 'JS one love'}
            ],
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;