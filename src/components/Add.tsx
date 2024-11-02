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
  const [selectStatus, setselectStatus] = useState('Pending');
  const [selectPriority, setselectPriority] = useState('Low');
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
    if(inputname=="" || inputDescription == ""){ alert("Name and Description is required ❗❗❗")}
    const response = await fetch("https://reactexambackend.onrender.com/missions/8851160", {
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
          "priority":selectPriority,
          "description": inputDescription
          }),
    });

    setInputValue("")
    setInputDescription("")
    setListMission([...listMission])
    return response.json();
  }
  return (
    <div className='add'>
        <h1 className='titel'> Military Operations Dashboard </h1>
        <div className='inputs'>
            <input type='text'placeholder='Enter name' onChange={handleChangeName} className='addMission'></input>
            <select className='addMission' name="status" onChange={(e) => handleChangeStatus(e)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>         
            </select>
            <select className='addMission' name="Priority" onChange={(e) => handleChangePriority(e)} >
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
            <input className='addMission' type='text'placeholder='Enter description' onChange={handleChangeDescription}></input>
            <button className='buttonAdd' onClick={result}>Add Mission</button>
        </div>
    </div>
  )
}



