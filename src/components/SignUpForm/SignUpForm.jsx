// Rewrite the SignUpForm as a function component
import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import "./SignUpForm.css"

export default function SignUpForm({ setUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm;

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const formDataCopy = {...formData}
            delete formDataCopy.error
            delete formDataCopy.confirm
            const user = await signUp(formDataCopy)
            setUser(user)
        } catch {
            setFormData({
                ...formData,
                error: 'Sign Up Failed - Try Again'
            })
        }

    }

    return(
        <div>
            <div className="container-1">
                <div className='sign-up'>Sign Up</div>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className='box'>
                            <label for="firstName" className='fl fontLabel'>Name: </label>
                                <div className='fl iconBox'><i className='fa fa-user' aria-hidden="true"></i></div>
                                    <input type="text" name="name" className='textBox' placeholder='Enter Name' value={formData.name} onChange={handleChange} required />
                                </div>
                            <div className='box'>
                                <label for="email" className='fl fontLabel'>Email: </label>
                                    <div className='fl iconBox'><i className='fa fa-envelope' aria-hidden="true"></i></div> 
                                    <input type="email-1" name="email" placeholder='Enter Email' className='textBox' value={formData.email} onChange={handleChange} required />
                                </div>  
                            <div className="box">
                                <label for="password" className='fl fontLabel'>Password: </label>
                                    <div className='fl iconBox'><i className='fa fa-key' aria-hidden="true"></i></div>
                                        <input type="password-1" name="password" placeholder="Enter Password" className='textBox' value={formData.password} onChange={handleChange} required />   
                                    </div>
                            <div className="box">
                                <label for="password" className='fl fontLabel'>Confirm: </label>
                                    <div className='fl iconBox'><i className='fa fa-key' aria-hidden="true"></i></div>    
                                        <input type="password-2" name="confirm" placeholder="Confirm Password" className='textBox' value={formData.confirm} onChange={handleChange} required />
                                    </div>
                                <button type="submit"  className="sign-up-button-1" id="submit" disabled={disable}>SIGN UP</button>
                            </form>
                        </div>
                        <p className="error-message">&nbsp;{formData.error}</p>
                    </div>
        )
}