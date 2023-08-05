// import { useEffect } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState as{
        username: string;
        email: string;
        password: string;
    };


  return (
    <>
        <h3>Form With Custom Hook</h3>
        <hr />
        <input 
            type="text"
            placeholder="user name"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
            (username==='userName2') && <Message/>
        }
        <input 
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
        />
        <br />
        <button onClick={ onResetForm }>Borrar</button>
    </>
  )
}