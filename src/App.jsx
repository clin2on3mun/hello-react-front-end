import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMessage } from './redux/message/messageSlice'
import Greeting from './greeting'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(getMessage())
  },[dispatch])
  return (
    <>
        <Routes>
            <Route path="/" element={<Greeting/>} />
        </Routes>
    </>
  )
}

export default App
