import React,{useContext, useReducer} from 'react';

interface State {
    firstNumber?:number|string;
    secondNumber?:number|string;
    calculatedValue?:number|string;
  }

const initialState:State = { firstNumber:"",secondNumber:"",calculatedValue:0 }

enum ActionKind {
    firstNumber = 'FIRST_NUMBER',
    secondNumber = 'SECOND_NUMBER',
    calculatedValue = 'CALCULATED_VALUE',
    clearInput="CLEAR_INPUT"
  }

interface Action{
    type: ActionKind,
    payload?: number|string
}

let numberReducer = (state:State, action:Action):State => {
    const {type, payload} = action;
    switch (type) {
        case ActionKind.firstNumber:
            return { ...state, firstNumber: !payload ? "" : payload };
        case ActionKind.secondNumber:
            return { ...state, secondNumber: !payload  ? "" :payload};
        case ActionKind.calculatedValue:
            return { ...state, calculatedValue: payload};
        case ActionKind.clearInput:
            return { ...state, firstNumber:"", secondNumber:"",calculatedValue:0};
        default:
            return state;
    }
  };

interface IContextValue{
    state: State;
    dispatch: React.Dispatch<any>;
}

export const ProviderContext = React.createContext<IContextValue>({
    state: initialState,
    dispatch: () => null
});

export const useProviderContext=()=>{
    return useContext(ProviderContext);
}

const ContextProvider:React.FC = ({children}):JSX.Element=>{
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