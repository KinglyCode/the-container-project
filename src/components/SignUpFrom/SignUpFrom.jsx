// import { useState } from "react"

// export default function SignUpForm() {
//     const [signUpForm, setSignUpForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     })

//     function handleSignUpForm(evt) {
//         evt.preventDefault();
//         signUpUser(signUpForm)
//         setSignUpForm({
//             name: '',
//             email: '',
//             password: '',
//             confirm: '',
//             error: ''
//         })
//     }

//     function handleChange(evt) {
//         const signUpFromData = {...signUpForm, [evt.target.name]: evt.target.value, error: ''}
//         setSignUpForm(signUpFromData)
//     }

//     return (
//         <div>
//             <div className="form-container">
//               <form autoComplete="off" onSubmit={handleSubmit}>
//                 <label>Name</label>
//                 <input type="text" name="name" value={signUpForm.name} onChange={handleChange} required />
//                 <label>Email</label>
//                 <input type="email" name="email" value={signUpForm.email} onChange={handleChange} required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={signUpForm.password} onChange={handleChange} required />
//                 <label>Confirm</label>
//                 <input type="password" name="confirm" value={signUpForm.confirm} onChange={handleChange} required />
//                 <button type="submit" disabled={disable}>SIGN UP</button>
//               </form>
//             </div>
//             <p className="error-message">&nbsp;{signUpForm.error}</p>
//           </div>
//     )
    
// }