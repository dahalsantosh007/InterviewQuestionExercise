import React,{useContext, useReducer} from 'react';

const initialState = { firstNumber:"",secondNumber:"",calculatedValue:0 }

let numberReducer = (state, action) => {
    switch (action.type) {
        case "FIRST_NUMBER":
            return { ...state, firstNumber: isNaN(action.value) ? "" : action.value };
        case "SECOND_NUMBER":
            return { ...state, secondNumber: isNaN(action.value) ? "" :action.value};
        case "CALCULATED_VALUE":
            return { ...state, calculatedValue: action.calculatedValue};
        case "CLEAR_INPUT":
            return { ...state, firstNumber:"", secondNumber:"",calculatedValue:0};
        default:
            return;
    }
  };

export const ProviderContext = React.createContext(initialState);

export function useProviderContext(){
    return useContext(ProviderContext);
}

const ContextProvider= ({children})=>{
    const [state, dispatch] = useReducer(numberReducer, initialState);
    
    const value = {
        state,dispatch
    }

    return (
        <ProviderContext.Provider value = {value}>
            {children}
        </ProviderContext.Provider>
    )
}

export default ContextProvider;