import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FormRow from "../Components/FormRow";
import {useNavigate} from "react-router";
import { getPosts} from "../store/slice";


function Home() {
    const {registration} = useSelector((store) => store.slice)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[]);



    const navigate = useNavigate()
    const initialState = {
        name: '',
        password: '',
        phone: '',
    }
    const [values, setValues] = useState(initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, password, phone} = values
        if (!name || !password || !phone) {
            alert('Please fill out all fields')
            return;
        }
        const found = registration.find((item) => {
           return  item.name === name && item.password === password  && item.phone === phone
        })
        if(found){
            navigate('/login')
        }
        else{
            alert('Your Login or Password or Phone Number is not correct')
        }
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setValues({...values, [name]: value})
    }

    const Register = () => {
        navigate('/register')
    }

    return (
        <div className={'container'}>
            <form id='form' onSubmit={handleSubmit}>

                <FormRow
                    type={'text'}
                    name={'name'}
                    placeholder={'name'}
                    value={values.name}
                    onchange
                    handleChange={handleChange}/>

                <FormRow
                    type={'number'}
                    name={'phone'}
                    placeholder={'phone'}
                    value={values.phone}
                    onchange
                    handleChange={handleChange}/>
                <FormRow
                    type={'password'}
                    name={'password'}
                    value={values.password}
                    handleChange={handleChange}/>
                <button form={'form'} className={'btn btn-success'}>Login</button>
                <button className={'btn btn-success'} onClick={Register}>Register</button>
            </form>
        </div>
    );
}

export default Home;