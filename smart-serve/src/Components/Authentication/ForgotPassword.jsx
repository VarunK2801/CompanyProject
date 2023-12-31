import React, { useRef } from 'react';
import classes from './Login.module.css';

function ForgotPassword() {
    const nameRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();


    const submitHandler =(e)=>{
        e.preventDefault();
        alert('Mail sent Succesfully !!!..')
        nameRef.current.value=''
        emailRef.current.value=''
        commentRef.current.value=''

    }
  return (
    <div className={classes.login_container}>
      <h2>Send e-mail to support@smartserv.io.com :</h2>

      <form
        action="mailto:support@smartserv.io.com"
        className={classes.login_form}
        method="post"
        encType="text/plain"
        onSubmit={submitHandler}
      >
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" ref={nameRef} name="name" />
        <br />
        <label htmlFor="email">E-mail:</label>
        <br />
        <input type="text" id="email" ref={emailRef} name="mail" />
        <br />
        <label htmlFor="comment">Comment:</label>
        <br />
        <input id="comment" name="comment" ref={commentRef} rows="4" cols="50"></input>
        <br />
        <button type="submit" className={classes.login_button}>
          Send mail
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
