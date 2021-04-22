const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

let initialState = {
    user: [
        {
            id: 0,
            img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
            firstName: 'John',
            lastName: 'Doe',
            aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, earum libero mollitia officia pariatur quas.',
        }
    ],
    checkAuthorization: false,
}


const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {

            return {
                ...state,
                checkAuthorization: true
            }
        }

        case LOGOUT: {
            return {
                ...state,
                checkAuthorization: false
            }
        }
        default: {
            return state;
        }
    }

}

export let loginAC = () => {
    return {
        type: LOGIN,
    }
}
export let unLoginAC = () => {
    return {
        type: LOGOUT,
    }
}

export default UserReducer;