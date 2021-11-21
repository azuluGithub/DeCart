//npm packages
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

//local imports
import './SignIn.css';
import CustomModal from '../../../components/custom_modal/CustomModal';
import { signInAction, clearMessagesAction } from '../../../store/actions/authActions';

/*
   # is a 'log in page'
*/
const SignIn = () => {
    
    //initialize state of input fields
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    //submit signup inputs to firebase auth then add user to mongodb
    const dispatch = useDispatch();
    const handleSubmit = () => dispatch(signInAction({ email, password }));
    
    //get data from redux state
    const message = useSelector((state) => state.auth.message);
    const isLoading = useSelector((state) => state.auth.isLoading)

    //disable button when loading
    const isButtonDisabled = loading => loading ? 'sign-in-button-disabled' : 'sign-in-button';

    //clear error messages from global state after 4 sec
    setTimeout(() => {
        message.length > 0 && dispatch(clearMessagesAction());
    }, 4000);

    //grab apiKey from local storage
    const apiKey = window.sessionStorage.getItem('apiKey');

    //if user is logged in route to dashboard
    if (apiKey) {
        return <Redirect to="/"/>;
    }

    return (
        <div className='sign-in'>
            <img className='sign-in-bg-image' src='/assets/images/bg/cartBg.jpg' alt='background img' />
                <div className='sign-in-wrapper'>
                    <div className='sign-in-form'>
                        <h3 className="sign-in-header">
                            SIGN IN
                        </h3>
                        <div className='sign-in-label-input-box'>
                            <label className='sign-in-label'>E-MAIL</label>
                            <br/>
                            <input
                                className='sign-in-input'
                                type="email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='sign-in-label-input-box'>
                            <label className='sign-in-label'>PASSWORD</label>
                            <br />
                            <input
                                className='sign-in-input'
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className={isButtonDisabled(isLoading)}
                            type="submit"
                            onClick={() => handleSubmit()}
                            disabled={isLoading}
                        > SIGN IN </button>

                        <Link className='link' to='/auth/signup'>
                            <p className='sign-in-signup-link'>Create new account</p>
                        </Link>
                </div>
            </div>
            {
                message ? 
                    <CustomModal>
                        <p className='failure-message'>{ message }</p>
                    </CustomModal>
                    : ''
            }
        </div>
    )
}

export default SignIn;