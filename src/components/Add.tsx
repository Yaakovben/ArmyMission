import React from 'react'

export default function Add() {
  return (
    <div className='add'>
        <h1 className='tite'> Military Operations Dassboard </h1>
        <div className='inputs'>
            <input type='text'placeholder='Enter name'></input>
            <input type='text'placeholder='Enter status'></input>
            <input type='text'placeholder='Enter priorlt'></input>
            <input type='text'placeholder='Enter description'></input>
            <button className='buttonAdd'>Add Mission</button>
        </div>
    </div>
  )
}
