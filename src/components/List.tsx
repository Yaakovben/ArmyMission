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

}

export default function List({listMission}:Props) {
  return (
    <div className='list'>
        {listMission.map(mission => <Item key={mission._id} _id={mission._id} name={mission.name} status={mission.status} description={mission.description} priority={mission.priority} />)}
    </div>
  )
}
