'use client'

import { useState } from 'react';
import styles from './login.module.scss'
import { useForm } from 'react-hook-form'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(false)

  const showErrorToast = () => {
    toast.error("Incorrect Username or Password", {
      position: toast.POSITION.TOP_CENTER,
      className: '{styles.toastSize}'
    })
  }

  const onSubmit = (data: any) => {
    showErrorToast();
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      <p className={styles.heading}>Welcome back</p>
      <div className={styles.loginBox}>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>

          <label className={styles.label}>Email address</label>
          <input className={`${styles.textBox} ${errors.email ? styles.error : ''}`}
            type='text'
            {...register('email',
              { 
                required: 'Email Address is required', 
                pattern: {value: /^\S+@\S+\.\S+$/, message: "Must be a valid email address"}
              }
            )}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email?.message}</span>}

          <label className={styles.label}>Password</label>
          <input className={`${styles.textBox} ${errors.password ? styles.error : ''}`}
            type='password'
            {...register('password',
              { 
                required: 'Password is required',
                minLength: {
                  value: 12,
                  message: "Password Should be atleast 12 characters long"
                }
              }
            )}
          />
          {errors.password && <span className={styles.errorMessage}>{errors.password?.message}</span>}

          <input className={styles.button} type='submit' value='Log in'/>

        </form>
        <div className={styles.agreement}>
          <p>By clicking Continue with Google, you agree to the Terms of Use and Privacy Policy.</p>
        </div>
        <div className={styles.provider}>
          <p><FcGoogle /> Continue with Google</p>
        </div>
      </div>
      <p className={styles.signupLink}>
        Don’t have an account? <Link className={styles.link} href='/auth/register'>Sign up.</Link>
      </p>
    </div>
  )
}
