import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'userName',
        email: 'email@email.com'
    })

    const { username, email } = formState

    const onInputChange = ( { target }: React.ChangeEvent<HTMLInputElement> )=>{
        const {name, value} = target;
        // console.log({name, value})
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(()=>{
        console.log("useEffect")
    }, [])

    useEffect(()=>{
        console.log("formState")
    }, [formState])

    useEffect(()=>{
        console.log("emalChange")
    }, [email])

  return (
    <>
        <h3>SimpleForm</h3>
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
    </>
  )
}
