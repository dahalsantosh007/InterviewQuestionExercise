/* 
    # make it an app and deploy in app store
    # make it as we app
    # deployment in heroku or maybe aws 
    # get some advertisement
    # add feature like
        * receipt photo to expense
        * recurring payment
        * cancellation of subscription
        * tracking and charts
        * react redux hooks                             //done 
        * redux toolkit                                 //done  
        * express and mongo for backend and database    //done
        * authentication using firebase.                //done
        * make UX changes
*/

import React from 'react'
import AddPage from './Page/AddPage';
import ContextProvider from './app/Provider';

import './App.css';

const App = () => {
    return (
        <ContextProvider>
            <AddPage/>
        </ContextProvider>
    )
}

export default App
