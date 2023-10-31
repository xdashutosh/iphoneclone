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
        w={['70%','50%', '17%']}
        minW={'300px'}
        borderRadius={'3xl'}
        p={'.5'}
        
      >
       <Iphonetop/>
       <VStack w={'-webkit-fit-content'} h={'100%'} mt={'4'}   spacing={['8']}>
<HStack spacing={['4','8']}>

<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>💼</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>📁</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🗑️</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>⚙️</Button>

  
</HStack>


<HStack spacing={['4','8']}>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🛒</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🎮</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🎙️</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>⚖️</Button>
</HStack>


<HStack spacing={['4','8']}>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🛡️</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🆘</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>⌛</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>📝</Button>
</HStack>


<HStack spacing={['4','8']}>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>📞</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🪪</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>💰</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>📅</Button>

</HStack>


<HStack spacing={['4','8']} alignSelf={'start'} >
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>📨</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🏧</Button>
</HStack>


<HStack spacing={['4','8']}>

</HStack>



       </VStack>
        


<HStack spacing={['4','8']} mt={'4'} bg={'blackAlpha.300'} p={'2'} borderRadius={'2xl'}>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🔍</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🎗️</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🎓</Button>
<Button backgroundColor={'blackAlpha.300'} fontSize={'2xl'} p={'0'} textColor={'white'}>🎧</Button>
</HStack>

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
