import React, { useState } from 'react'
import { readable } from '../../lib/common'


interface TextFormProps {
  data:  { [key: string]: string; },
  submit: () => void
}


const TextForm = ({ data, submit }:TextFormProps) => { 
  const [input, setData] = useState(data)

  return (
    <>
      <form onSubmit={submit}>
        {Object.entries(data).map(([name, value]) =>  (
          <div key={name}>            
            <label>{readable(name)}</label> 
            <input
              name={name}
              autoComplete='false'
              value={[value]}
              onChange={(e) => setData({ ...data, [name]: e.target.value })}
            />
          </div>))}
        <button> Submit</button>
      </form>
    </>
  )
}

export default TextForm 