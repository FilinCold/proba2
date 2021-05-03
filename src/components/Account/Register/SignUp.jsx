import React from 'react';
import {NavLink} from "react-router-dom";



const SignUp = () => {
    return (
        <div className='wrapper__login-register'>
            <div className="container__h2">
                <h2>Sign Up</h2>
            </div>

            <form action="#" className='container__form'>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Your name</label>
                    </div>
                    <div className='box-input'>
                        <input type="text"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Email</label>
                    </div>
                    <div className='box-input'>
                        <input type="email"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Password</label>
                    </div>
                    <div className='box-input'>
                        <input type="password"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Confirm Password</label>
                    </div>
                    <div className='box-input'>
                        <input type="password"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className='box-input'>
                        <input id='style-submit' type="submit" value='Sign Up'/>
                    </div>
                </div>
                <div className='block-text'>
                    <span>Have an account? <NavLink className='login__link' to='/register'>Sign in</NavLink></span>
                </div>
            </form>
        </div>
    )
}

export default SignUp