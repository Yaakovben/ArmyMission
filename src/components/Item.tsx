import React from 'react'

interface Props{
  _id:string
  name: string,
  status: string,
  priority: string,
  description: string
    
}

export default function Item({_id,name,status,priority,description}:Props) {
  return (
    <div className='item'>
      <div className='information'>
      <h1>Name:{name} </h1>
      <h2>Status:{status} </h2>
      <h2>Priority: ({priority})</h2>
      <h2>Description: {description} </h2>
      </div>
      <button className='delete'>Delete</button>
      {status !="Completed" ? <button className='progrec'>Progrec</button> : ""}
      
    </div>

  )
}
