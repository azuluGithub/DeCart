//npm packages
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//local imports
import './SignUp.css';
import NavBar from '../../../components/nav_bar/NavBar';
import CustomModal from '../../../components/custom_modal/CustomModal';
import { signUpAction, clearMessagesAction } from '../../../store/actions/authActions';

/**
 * #REGISTER NEW USER
 */
const SignUp = () => {
    
    /**
     * #FORM VALUES
     */
    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ cpassword, setCPassword ] = useState('');

    /**
     * #SEND FORM TO THE BACK-END
     * #STORE RESPONSE ON REDUX STATE
     */
    const dispatch = useDispatch();
    const handleSubmit = () => dispatch(signUpAction({ userName, email, password, cpassword }));
    
    /**
     * #FETCH SERVER RESPONSES FROM REDUX STATE
     */
    const message = useSelector((state) => state.auth.message);
    const isLoading = useSelector((state) => state.auth.isLoading)

    /**
     * #USE GREEN FOR SUCCESS MESSAGES
     * #AND RED FOR ERROR MESSAGES
     */
    const messageClass = (message, str) => message.includes(str) ? 'success-message' : 'failure-message';

    /**
     * #DISABLE THE BUTTON WHEN LOADING
     */
    const isButtonDisabled = loading => loading ? 'sign-up-button-disabled' : 'sign-up-button';
    
    /**
     * #CLEAR SUCCESS OR ERROR MESSAGES AFTER 4s
     */
    setTimeout(() => {
        message.length > 0 && dispatch(clearMessagesAction());
    }, 4000);

    return (
        <>
        <NavBar />
        <div className='sign-up'>
            <img className='sign-up-bg-image' src='/assets/images/bg/cartBg.jpg' alt='background img' />
            <div className='sign-up-wrapper'>
                <div className='sign-up-form'>
                    <h3 className="sign-up-header ">
                        Sign Up
                    </h3>
                    <div className='sign-up-label-input-box'>
                        <label className='sign-up-label'>USERNAME</label>
                        <br/>
                        <input
                            className='sign-up-input'
                            type="text" 
                            name="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className='sign-up-label-input-box'>
                        <label className='sign-up-label'>EMAIL</label>
                        <br/>
                        <input
                            className='sign-up-input'
                            autoComplete='off'
                            type="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='sign-up-label-input-box'>
                        <label className='sign-up-label'>PASSWORD</label>
                        <br />
                        <input
                            className='sign-up-input'
                            autoComplete='off'
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='sign-up-label-input-box'>
                        <label className='sign-up-label'>CONFIRM PASSWORD</label>
                        <br />
                        <input
                            className='sign-up-input'
                            autoComplete='off'
                            type="password"
                            name="cpassword" 
                            onChange={(e) => setCPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className={isButtonDisabled(isLoading)}
                        type="submit"
                        onClick={() => handleSubmit()}
                        disabled={isLoading}
                    > SIGN UP </button>
                    <Link className='link' to='/auth/signin'>
                        <p className='sign-up-signin-link'>Log into your account</p>
                    </Link>
                </div>
            </div>
            {
                message ? 
                    <CustomModal>
                        <p className={messageClass(message, 'you can now login')}>{ message }</p>
                    </CustomModal>
                    : ''
            }
        </div>
        </>
    )
}

export default SignUp;