import React from 'react';

const FormRow = ({type, name, value, handleChange,  placeholder}) => {
    return (
        <div>
            <label htmlFor={name} className={'m-2'}>
                {name}
            </label>
            <input
                id={name}
                type={type}
                placeholder = {placeholder}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default FormRow;
