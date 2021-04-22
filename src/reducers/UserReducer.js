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
    buttonAuthorization: false,
}


const UserReducer = (state=initialState, action) => {
    return state;
}




export default UserReducer;