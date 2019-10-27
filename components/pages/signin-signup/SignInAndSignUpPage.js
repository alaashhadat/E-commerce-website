import React from 'react'
import './Signin-signup-styles.scss'
import  SignIn from "../../../components/sign-in/SignIn"
import SignUp from "../../sign-up/SignUp"
export default function SignInAndSignUpPage() {

  return (
  
      <div className="sign-in-and-sign-up-page">
<SignIn/>
<SignUp/>
      </div>

  )
}
