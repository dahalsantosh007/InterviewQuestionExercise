import React,{useState,useEffect,useRef} from 'react';

// Material UI import
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

// Provider Import
import {useProviderContext} from '../app/Provider';

const AddPage = () => {
    const {state,dispatch} = useProviderContext();

    const addFunction=()=>{
        let calculatedValue = state.firstNumber+state.secondNumber
        dispatch({type:'CALCULATED_VALUE',calculatedValue:calculatedValue})
    }

    const checkDisableValue=()=>{
        if(!state.firstNumber || !state.secondNumber){
            return true
        }
        return false
    }

    return (
        <div className= "container">
            <div className = "addPage--div__center__white__box">
                <div className = "addPage--div__center__number__box">
                    <Input 
                        id="firstNumber"
                        type = "number"
                        value = {state.firstNumber}
                        onChange={(e)=>dispatch({type:'FIRST_NUMBER',value:parseInt(e.target.value,10)})}
                        autoFocus = {true} 
                        disableUnderline={true}
                        required = {true}
                        className ="addPage--input__number "/>
                    <AddIcon className = "addPage--icon__add "/>
                    <Input 
                        id="secondNumber"
                        type = "number"
                        value = {state.secondNumber}
                        disableUnderline={true}
                        required ={true}
                        onChange={(e)=>dispatch({type:'SECOND_NUMBER',value:parseInt(e.target.value,10)})}
                        className ="addPage--input__number "/>
                    <div className ="addPage--span__equal_sign ">=</div>
                    <InputLabel
                        className ="addPage--label__calcualted__value  ">
                        {state.calculatedValue}
                    </InputLabel>
                </div>
                <div className = "addPage--div__button__group">
                    <Button disabled ={checkDisableValue()} className = "addPage--button__clear" variant="contained" size="medium" onClick={()=>dispatch({type:'CLEAR_INPUT'})}>Clear</Button>

                    <Button  disabled ={checkDisableValue()}className = "addPage--button__add" variant="contained" size="medium" onClick={()=>addFunction()}>Add</Button>
                </div>
            </div>
        </div>
    )
}

export default AddPage
