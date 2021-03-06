import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const host = "http://localhost:5000";
    
    //function to login user
    const handleSubmit = async (e) => {
        e.preventDefault();
        //API call to login user
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
        });

        const json = await response.json();
        if(json.success){
            // save the token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/')
        }
        else{
            alert("Valid credentails - please enter with correct email and password")
        }
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return <div className='container login'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">password</label>
                <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} ></input>
            </div>
            <button type="submit" className="btn btn-success" >Submit</button>
        </form>
    </div>;
}
