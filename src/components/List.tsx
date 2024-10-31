import React from 'react'
import Item from './Item'

interface PropsMission{
  _id:string
  name: string,
  status: string,
  priority: string,
  description: string  
}
interface Props{
  listMission:PropsMission[]
  setListMission:(x: PropsMission[])=>void
}

export default function List({listMission,setListMission}:Props) {
  return (
    <div className='list'>
      <h3 className='mission'>Mission</h3>
        {listMission.map(mission => <Item key={mission._id} _id={mission._id} name={mission.name} status={mission.status} description={mission.description} priority={mission.priority} setListMission={setListMission} />)}
    </div>
  )
}
