import {React , useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {Link, Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';
function Login() {
    useEffect(()=>{
        JSON.parse(localStorage.getItem('user')) && <Redirect to="dashboard" />
    });
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    const handleSubmitLogin = async (e) =>{
        e.preventDefault();
        await axios
      .post("http://localhost:3000/users/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(parseJwt(response.data.token)._id));
        }
        console.log(localStorage.getItem('user'));

        return response.data;
      });
      const result = await axios.get("http://localhost:3000/users/"+localStorage.getItem('user').slice(1,-1));
        console.log(result.data);
        var teacher = result.data[0].TeacherAuth;
        console.log(teacher);
        if(teacher)
        history.push('/dashboard') 
        else
        history.push('/student') 
    }
    return(
        <div className="login">
            <div className="login-header">
                <h1>Sign In</h1>
            </div>
            <div className="login-form">
            <form onSubmit={handleSubmitLogin}>
            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} /><br/><br/>
            <TextField type="password" id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/><br/>
            <Button type="submit" variant="contained">
            Sign In</Button>
            </form> 
            </div>
            <div className="login-link">
                <p>New &nbsp;<Link className="login-link-link" to="signup">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login;