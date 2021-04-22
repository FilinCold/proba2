

let initialState = {
    posts: [
        {
            id: 0,
            data: 'August 2017',
            tag: 'TYPOGRAPHY',
            title: 'Humane Typography in the Digital Age',
            text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
                'The year when a conflict between two worlds came to its term. ' +
                'The machines of the industrial world finally took over the handicrafts',
            bigText: '.....',

        },
    ]
}


const PostsReducer = (state=initialState, action) => {
    return state;
}




export default PostsReducer;