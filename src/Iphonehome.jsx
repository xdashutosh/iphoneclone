import { Box, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/layout';

import {RiChromeFill } from 'react-icons/ri'

import { Button } from '@chakra-ui/button';


import Iphonetop from './Iphonetop';
import { Link } from 'react-router-dom';
import iphonehomebg from '../src/assests/iphonehomebg.jpeg'

function Iphonehome() {
  




  return (
    <Stack
      h={'100vh'}
      w={'full'}
      justifyContent={'center'}
      alignItems={'center'}
      overflowY={'hidden'}

    >
      <VStack 
        backgroundImage={
          iphonehomebg
        }
        bgPosition={'center'}
      
        justifyContent={'space-between'}
        padding={'4'}
        mt={['-36', '-36']}
        border={'5px solid'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        h={'60%'}
        w={['70%', '17%']}
        borderRadius={'3xl'}
        p={'.5'}
        
      >
       <Iphonetop/>
       <VStack w={'full'} h={'100%'} mt={'4'}  border={'1px solid'} spacing={'8'}>
<HStack spacing={'8'}>
  <Button backgroundColor={'blackAlpha.300'} h={'40px'} ><RiChromeFill color='white' size={'30px'}/></Button>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
</HStack>


<HStack spacing={'8'}>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
</HStack>


<HStack spacing={'8'}>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
</HStack>


<HStack spacing={'8'}>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
</HStack>


<HStack spacing={'8'}>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
</HStack>


<HStack spacing={'8'}>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
  <Button>G</Button>
</HStack>



       </VStack>
        




        <Link to={'/iphoneX'}>
        <Button
         h={'4px'}
         px={'14'}
          bg={'white'}
          >
          </Button>
          </Link>

      </VStack>
    </Stack>
  );
}

export default Iphonehome;
