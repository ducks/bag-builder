import React from 'react';

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={ props.name }> { props.title }</label>
      <input
        name={ props.name }
        value={ props.value }
        onChange={ props.handleChange.bind(this) }>
      </input>
    </div>
  )
}

export default Input;
