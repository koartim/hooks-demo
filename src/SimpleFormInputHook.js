import React from 'react';
import useInputState from './hooks/useInputState';

const SimpleFormInputHook = () => {

    const [email, updateEmail, resetEmail] = useInputState("");

    const [password, updatePassword, resetPassword] = useInputState("");
 
    return(
        <div>
            <h1>Email is: {email} & Password is: {password}</h1>
            <input type="text" value={email} onChange={updateEmail}/>
            <input type="text" value={password} onChange={updatePassword}/>
            <button onClick={resetEmail}>resetEmail</button>
            <button onClick={resetPassword}>resetPassword</button>
        </div>
    )
}

export default SimpleFormInputHook;