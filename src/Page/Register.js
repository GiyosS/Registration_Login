import React from 'react';
import { useState} from 'react'
import {useDispatch} from "react-redux";
import {savePosts} from "../store/slice";
import FormRow from "../Components/FormRow";

import {useNavigate} from "react-router";

function Register(props) {
    const initialState = {
        name: '',
        surname: '',
        phone: '',
        password: '',
    }

    const [values, setValues] = useState(initialState)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, surname, phone, password,} = values
        if (!name || !password || !surname || !phone) {
            alert('Please fill out all fields')
            return;
        }
        else{
            navigate('/login')
        }
        dispatch(savePosts({
            name, surname, phone, password
        }))
        setValues(initialState)
    }
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setValues({...values, [name]: value})
    }
    function backHome(){
        navigate('/')
    }



    return (
        <div className={'container'}>
                <h1 className={'mt-5'}>Register</h1>
                <form id='form' onSubmit={handleSubmit}>
                    <FormRow
                        type={'text'}
                        name={'name'}
                        placeholder={'name'}
                        value={values.name}
                        handleChange={handleChange}/>
                    <FormRow
                        type={'text'}
                        name={'surname'}
                        placeholder={'surname'}
                        value={values.surname}
                        handleChange={handleChange}/>
                    <FormRow
                        type={'number'}
                        name={'phone'}
                        placeholder={'phone'}
                        value={values.phone}
                        handleChange={handleChange}/>

                    <FormRow
                        type={'password'}
                        name={'password'}
                        value={values.password}
                        handleChange={handleChange}/>
                    <button form={'form'} className={'btn btn-success'}>Register </button>
                </form>
            <button className={'btn btn-success m-1'} onClick={backHome}>back </button>
        </div>
    );
}

export default Register;