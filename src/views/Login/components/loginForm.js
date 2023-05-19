import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import { validateLogin } from '../../../data/login';

export function LoginForm() {
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validateLogin(username, password)){
            alert(`Wrong username or password`);
        }else{
            navigate('/dashboard');
        }
    }

    return (
        <form class="form_login"
            style={{
                width: '80%',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <div>
                <h1 style={{
                    color: 'white',
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontFamily: 'Orbitron, sans-serif',
                    width: '100%',
                }}>Login</h1>
            </div>
            <div
                style={{
                    marginTop: '2%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                <label
                    for='username'
                    style={{
                        color:'#FFF8F8',
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '2rem',
                    }}>
                    Username:
                </label>
                <input
                    id='username'
                    type="text"
                    value={username}
                    onChange={(e) => setUserame(e.target.value)}
                    style={{
                        width: '60%',
                        borderRadius: '2%',
                        padding: '1rem 0.5rem',
                        margin: '0.5rem 0',
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '1rem',
                        border: '1px solid #FFF8F8',
                        backgroundColor: '#FFF8F8',
                    }}
                />
                </div>
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                <label for='password'
                    style={{
                        color:'#FFF8F8',
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '2rem',
                    }}>
                    Password:
                </label>
                <input
                    id='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: '60%',
                        borderRadius: '2%',
                        padding: '1rem 0.5rem',
                        margin: '1rem 0',
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '1rem',
                        border: '1px solid #FFF8F8',
                        backgroundColor: '#FFF8F8',
                    }}
                />
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
        </form>
    )
}

