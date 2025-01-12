import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'; 

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// export const counterReducer = (state = initialCounterState, action) => {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             ...state,
//             counter: state.counter + action.amount
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

// const _ = createStore(counterReducer);

const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: { counter: counterSlice.reducer, auth: counterSlice.reducer }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
