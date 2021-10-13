import React from 'react';

export default (state: any, action: any) => {
    switch (action.type) {
        case "updateForm":
            return {
                ...state,
                form: {...state.form, ...action.payload}
            }
    }
}

