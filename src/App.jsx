import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import IphoneX from './IphoneX'
import Phones from './Phones'
import Iphonehome from './Iphonehome'
const App = () => {
  return (
   <BrowserRouter>
   <Phones/>
   <Routes>
    <Route path='/iphoneX' element={<IphoneX/>}/>
    <Route path='/iphoneX/iphoneXhome' element={<Iphonehome/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
