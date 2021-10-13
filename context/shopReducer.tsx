import React from 'react';

export default (state: any, action: any) => {
        switch (action.type) {
            case "add": // = action
                return {...state, cart:[...state.cart,action.payload]}
            case "delete": // = action
                let payload = state.cart.filter(elem => elem.id !== action.payload)
                return {...state, cart:payload}

        }
    }

