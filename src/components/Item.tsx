import React from 'react'
interface Mission{
  _id:string
  name: string,
  status: string,
  priority: string,
  description: string  
}
interface Props{
  _id:string
  name: string,
  status: string,
  priority: string,
  description: string,
  setListMission:(x: Mission[])=>void   
}

export default function Item({_id,name,status,priority,description,setListMission}:Props) {
  const result = async() =>{
    const response = await fetch(`https://reactexambackend.onrender.com/missions/8851160/${_id}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    setListMission([])
    return response.json();
  }
  const updateStatus = async() =>{
    const response = await fetch(`https://reactexambackend.onrender.com/missions/8851160/progress/${_id}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    setListMission([])
    return response.json();
  }
  return (
    <div className={`item ${status=="Pending"? "red": status=="In Progress"? "orenge":"green"} `}>
      <div className='information'>
      <h1>Name:{name} </h1>
      <h2>Status:{status} </h2>
      <h2>Priority: ({priority})</h2>
      <h2>Description: {description} </h2>
      </div>
      {status !="Completed" ? <button className='progrec' onClick={updateStatus}>Progrec</button> : ""}
      <button className='delete' onClick={result}>Delete</button>
    </div>
  )
}
