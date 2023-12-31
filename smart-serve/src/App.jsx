  import { useEffect, useRef, useState } from "react"
  import LoginFormx from "./Components/Authentication/LoginX"
  import UserData from "./Components/UserData"
import SpecificData from "./Components/SpecificData"
import Dashboard from "./Components/Dashboard"
import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./Components/Authentication/ForgotPassword"


  function App() {

    return (
      <>
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Login' element={<LoginFormx/>}/>
        <Route path='/Userdata' element={<UserData/>}/>
        <Route path='/sortedData' element={<SpecificData/>}/>
        <Route path='/Forgotpassword' element={<ForgotPassword/>}/>
      </Routes>
       
      </>
    )
  }

  export default App
