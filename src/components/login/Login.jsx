import { toast } from "react-toastify";
import "./login.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

    const handleLogin = e => {
        e.preventDefault();
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className='login'>
            <div className="item">
                <h1>Ouais Basmoz</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <div className="password-container">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Mot de passe"
                            name="password"
                        />
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEyeSlash : faEye}
                            onClick={togglePasswordVisibility}
                            className="eye-icon"
                        />
                    </div>
                    <button>Sign In</button>
                    <p>Pas de compte? Inscrivez vous <a href="#" className="link">ici</a></p>
                </form>
            </div>
            {/* <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                    <form>
                        <label htmlFor="file">
                            <img src={avatar.url || "./avatar.png"} alt="" />
                            Upload an image</label>
                        <input type="file" style={{display:"none"}} id="file" onChange={handleAvatar}/>
                        <input type="text" placeholder="Username" name="username"/>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Mot de passe" name="password"/>
                        <button>Sign up</button>            
                    </form>
            </div> */}
        </div>
    )
}

export default Login;
