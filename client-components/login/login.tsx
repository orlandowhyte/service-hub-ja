'use client'

import styles from './login.module.scss'
import { useForm } from 'react-hook-form'

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Welcome back</p>
      <div className={styles.loginBox}>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <input className={styles.textBox} type='text' />
          <input className={styles.textBox} type='text' />
          {/* <input className={styles.textBox} type='submit' value='Log in'/> */}
        </form>
      </div>
    </div>
  )
}
