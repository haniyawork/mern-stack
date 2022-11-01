const initialState = {
    cards: [
        { id: 1, title: 'Alex', body: 'lorem ipsom' },
        { id: 2, title: 'John', body: 'lorem ipsom' },
        { id: 3, title: 'Zara', body: 'lorem ipsom' },

    ]
}

const rootReducer = (state = initialState, action) => {
    console.log(action);
    return state;
}
export default rootReducer;