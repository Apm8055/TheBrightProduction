import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

const LoginPage = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  // State to handle error messages
    const navigate = useNavigate();  // Replacing useHistory with useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken(); // Get JWT from Firebase
            localStorage.setItem('token', token);  // Store token in localStorage
            setToken(token);  // Set token state
            setError('');  // Clear any previous error
            navigate('/dashboard');  // Redirect to dashboard using useNavigate
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Incorrect email or password. Please try again.');  // Set the error message
        }
    };

    return (
        
        <div className={styles.containerr}>
            <div className={styles.wrapper}>

                <div className={styles.title}>
                    <span>Welcome Admin</span>
                </div>
                <p className={styles.title_para}>Please enter your details to sign in.</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        {/* <i className="fas fa-user"></i> */}
                        <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email..." required
                        />
                    </div>
                    <div className={styles.row}>
                        {/* <i className="fas fa-lock"></i> */}
                        <input 
                            
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                        />
                    </div>
                    <div className={styles.pass}><a href="#">Forgot password?</a></div>

                    {/* Error message display */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}


                    <div className={`${styles.row} ${styles.button}`}>
                        <input type="submit" value="Login" />
                    </div>
                    <div className={styles.signupLink}>Not a member? <a href="#">Signup now</a></div>
                </form>
            </div>
        </div>

    );
};

export default LoginPage;
