import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import IphoneX from './IphoneX'
import Phones from './Phones'
import Iphonehome from './Iphonehome'
import { isMobile } from 'react-device-detect';
import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
const App = () => {


  if (isMobile) {
    return (
    <VStack justifyContent={'center'} alignItems={'center'} w={'full'} h={'80vh'} >
<Heading>⚠️</Heading>
<Heading textAlign={'center'}>Sorry, this app is not available on mobile devices.</Heading>
        <Text textAlign={'center'}>Please access it on a desktop computer.</Text>
    </VStack>
    );
  }
else{
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
}
export default App
