import React, { useState } from 'react'

interface Mission{
  _id:string
  name: string,
  status: string,
  priority: string,
  description: string  
}
interface Props{
  setListMission:(x: Mission[])=>void
  listMission:Mission[]
}
export default function Add({setListMission, listMission}:Props) {
  const [inputname, setInputValue] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [selectStatus, setselectStatus] = useState('');
  const [selectPriority, setselectPriority] = useState('');
  

  
  const handleChangeName = (event:any) => {
    setInputValue(event.target.value);
  };
  const handleChangeDescription = (event:any) => {
    setInputDescription(event.target.value);
  };
  const handleChangeStatus = (event:any) => {
    setselectStatus(event.target.value);
  };
  const handleChangePriority = (event:any) => {
    setselectPriority(event.target.value);
  };







  const result = async() =>{
    const response = await fetch("https://reactexambackend.onrender.com/missions/:8851160", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(
        {"name": inputname,
        "status": selectStatus,
        "priority":"High",
        "description": inputDescription
        }),
    });
    setListMission([...listMission])
    return response.json();





  }
  




  return (
    <div className='add'>
        <h1 className='titel'> Military Operations Dassboard </h1>
        <div className='inputs'>
            <input type='text'placeholder='Enter name' onChange={handleChangeName}></input>
            <select name="status" onChange={handleChangeStatus}>
              <option value="Pending">Pending</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>         
            </select>
            <select name="Priority" onChange={handleChangePriority} >
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
            <input type='text'placeholder='Enter description' onChange={handleChangeDescription}></input>
            <button className='buttonAdd' onClick={result}>Add Mission</button>

        </div>
    </div>
  )
}



