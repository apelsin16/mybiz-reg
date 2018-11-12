import React from 'react';
import PropTypes from 'prop-types';
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

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
}


 



export default Input;