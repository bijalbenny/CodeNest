import React,{useState} from "react";
import Axios from "axios";
import '../styles/signup.css';
import { Link , useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post(
                "http://localhost:3000/api/signup",
                {fullname ,username, password },
                {withCredentials: true}
            );
            if (response.status === 200) {
                console.log(response.data.message); 
                navigate("/home");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="signup-full">
            <div className="signup-container">
                <div className="img-container">
                    <img src="src/assets/b-logo.svg" alt="Icon" width={50} height={50} />
                </div> 
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="signup-input" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                    <input type="text" className="signup-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" className="signup-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="signup-button">Register</button>
                </form>
                <div className="signup-link">
                     <Link to="/signin">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
