import React from 'react'
import "./modal_styles.css"
function LoginModal( {closeModal} ) {
  return (
    <div>
      <div className="add_pin_modal" onClick={()=> closeModal(false)}>
            <div className="LoginModalContainer" onClick={(e)=>{e.stopPropagation()}}>
               <div className="modal-body">
                        <h2>Login / Sign-up</h2>
                        
                        <form className="contact-form" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="loginbtn" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div> 
            </div>
        </div>
    </div>
  )
}

export default LoginModal
