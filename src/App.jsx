import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import IphoneX from './IphoneX'
import Phones from './Phones'
const App = () => {
  return (
   <BrowserRouter>
   <Phones/>
   <Routes>
    <Route path='/iphoneX' element={<IphoneX/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
