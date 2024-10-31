import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Add from './components/Add'
interface Mission{
  _id:string
  name: string,
  status: string,
  priority: string,
  description: string
}

function App() {
  const [listMission, setListMission] = useState<Mission[]>([])
  useEffect(()=>{
      (async() =>{
          const result = await fetch("https://reactexambackend.onrender.com/missions/8851160")
          const data = await result.json()
          setListMission(data)
      })()
  },[listMission])
  return (
    <>
    <Add setListMission={setListMission} listMission={listMission}/>
    <List listMission={listMission} setListMission={setListMission} />
    </>
  )
}
export default App
