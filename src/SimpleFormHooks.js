import React, {useState} from 'react';

const SimpleFormHooks = () => {

    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <form onChange={handleChange} onClick={() => setEmail("")}>
                <h1>The Value is...{email}</h1>
                <input type="text" value={email}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleFormHooks;