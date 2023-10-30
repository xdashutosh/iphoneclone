import { Box, Container, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';


function App() {
  return (
<Stack  h={'100vh'} w={'full'} justifyContent={'center'} alignItems={'center'} overflowY={'hidden'}>
<VStack backgroundImage={'https://wallpapers.com/images/featured/aesthetic-iphone-8k436w42fxqrt0xb.jpg'} bgPosition={'center'} padding={'4'} mt={['-24','0']} border={'5px solid'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} h={'60%'} w={['70%','17%']} borderRadius={'3xl'} p={'.5'}>
<HStack  h={'3%'} w={'100%'} justifyContent={'space-evenly'} borderTopRadius={'3xl'}   >
<Text fontSize={'12px'} ml={'-2.5'} mt={'2'} color={'white'} >Airtel</Text>
<HStack h={'90%'} borderBottomRadius={'xl'} w={'35%'} justifyContent={'center'} bg={'blackAlpha.700'}>
<Box h={'50%'} w={'40%'}  borderRadius={'2xl'} bg={'blackAlpha.700'}></Box>
<Box h={'8px'} w={'8px'} borderRadius={'100%'} bg={'blackAlpha.700'}></Box>
</HStack>
<HStack mt={'2'}>

</HStack>
</HStack>

</VStack>
</Stack>
  );
}

export default App;
