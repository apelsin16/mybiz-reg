import React from 'react';

import './styles.css';

const Input = ({ value, name, onChange, label }) => (
    <div>
        <label htmlFor={name} className="label">{label}</label>
        <input 
            className="input"
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            id={name}
        />
    </div>
);

export default Input;
