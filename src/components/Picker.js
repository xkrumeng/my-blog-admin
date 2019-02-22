import React from 'react'

export default function Picker(props) {
  const { value, onChange, options } = props
  return (
    <span>
      <h1>{value}</h1>
      <select onChange={e => onChange(e.target.value)} value={value}>
        {options.map(option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          )
        })}
      </select>
    </span>
  )
}
