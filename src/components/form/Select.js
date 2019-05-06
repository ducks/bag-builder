import React from 'react';

const Select = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={ props.name }> { props.title }</label>
      <select
        name={ props.name }
        defaultValue={ props.value }
        onChange={ props.handleChange.bind(this) }>
        <option value="" disabled>{ props.placeholder }</option>
        { props.options.map(option => {
          return (
            <option
              key={ option.title }
              value={ option.value }
              label={ option.title }>{ option.title }
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default Select;
