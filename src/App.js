import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Sites from './Sites'

const App = () => {
	const initialFormState = { username: '', password: '' }
    const [ user, setUser ] = useState(initialFormState)
    const [ auth, setAuth ] = useState(false)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
    }
    
    const logout = event => {
        localStorage.removeItem('token');
		setAuth(false);
    }

    const doAuth = (token) => {
		axios.get('/.netlify/functions/auth?token=' + token)
		.then((response) => {
            console.log(response)
            localStorage.setItem('token', token);
            setAuth(true)
            setUser(initialFormState)
		})
		.catch((err) => {
            if (err.response && err.response.status && err.response.status === 401) {
                alert("Invalid Password");
                logout();
            }else{
                console.error(err)
            }
		})	
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            doAuth(token)
        }	
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return (
        <div className="container">
			<h1>FastSite Console</h1>
            {auth ? (
                <Fragment>
                    <div className="right-align"><button onClick={logout} className="button muted-button">
                        Logout
                    </button></div>
                    <Sites />
                </Fragment>
            ) : (
            <form
			onSubmit={event => {
				event.preventDefault()
				if (!user.username || !user.password){
                    alert("Please provide username and password");
                    return
				}
				doAuth(user.password);
			}}
		    >
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange} className="text-box"/>
                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleInputChange} className="text-box"/>
                <button>Login</button>
		    </form>
            )}		
		</div>
	)
}

export default App
