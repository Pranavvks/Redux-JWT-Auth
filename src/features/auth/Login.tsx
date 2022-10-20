import { useRef, useState, useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = ()=>{
    const userRef = useRef<HTMLInputElement>() ;
    const dispatch = useDispatch();
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    

    useEffect(()=>{
        userRef.current?.focus()
    },[])
    //useEffect hook with empty dependency array -> runs only once

    useEffect(()=>{
        setErrMsg('')
    }, [user,pwd])

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault() 

        try{
            const userData = await login({user,pwd}).unwrap()
            dispatch(setCredentials({ ...userData, user }))
        }
        catch{

        }

    }


    return
    (
        <div>

        </div>
    )
    

}