import React, { useReducer } from 'react';
import FourierReducer from './FourierReducer';
import FourierContext from './FourierContext';

const FourierState = (props) => {
    const initialState = {
        time: 0,
        humbral: 3
    }

    const [state, dispatch] = useReducer(FourierReducer, initialState);

    const setTime = (t) => {
        console.log(t)
        dispatch({
            type: 'SET_TIME',
            payload: t
        })
    }

    const setHumbral = (h) => {
        console.log(h)
        dispatch({
            type: 'SET_HUMBRAL',
            payload: h
        })
    }

    return (
        <FourierContext.Provider  value={{
            time: state.time,
            humbral: state.humbral,
            setTime,
            setHumbral
        }}>
            {props.children}
        </FourierContext.Provider>
    )
}

export default FourierState;