import React from 'react'
import './CustomButton-styles.scss'
export default function CustomButton({children,isGoogelSignIn,...otherProps}) {
    return (
        <div>
           <button className={`${isGoogelSignIn?'google-sign-in':''}custom-button `}{...otherProps}>{children}</button> 
        </div>
    )
}
