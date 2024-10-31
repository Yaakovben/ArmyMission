import React from 'react'

export default function Add() {
  return (
    <div className='add'>
        <h1 className='titel'> Military Operations Dassboard </h1>
        <div className='inputs'>
            <input type='text'placeholder='Enter name' ></input>
            <select name="status" >
              <option value="Pending">Pending</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>         
            </select>
            <select name="Priority" >
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
            <input type='text'placeholder='Enter description'></input>
            <button className='buttonAdd'>Add Mission</button>
        </div>
    </div>
  )
}
