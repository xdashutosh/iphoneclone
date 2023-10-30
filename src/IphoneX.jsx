import { Box, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/layout';

import { } from 'react-icons/ri';
import { GiLightBulb} from 'react-icons/gi';
import { BsFillLockFill, BsCamera} from 'react-icons/bs';

import { Button } from '@chakra-ui/button';


import Iphonetop from './Iphonetop';
import { Link } from 'react-router-dom';

function IphoneX() {
  
  
 

  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();

  const twelveHourFormat = currentHour % 12 || 12; // Ensure 12:00 AM/PM is displayed correctly

  // Format the hours and minutes to add leading zeros if necessary
  const formattedHour =
    twelveHourFormat < 10 ? '' + twelveHourFormat : twelveHourFormat;
  const formattedMinute =
    currentMinute < 10 ? '0' + currentMinute : currentMinute;

  const today = date.getDay();
  const month = date.getMonth();
  const weekdays = [
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

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
          'https://wallpapers.com/images/featured/aesthetic-iphone-8k436w42fxqrt0xb.jpg'
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
        <VStack h={'full'}>
          <BsFillLockFill color="white" />
          <HStack>
            <Text textColor={'white'}>{weekdays[today - 1]},</Text>
            <Text textColor={'white'}>{date.getDate()}</Text>
            <Text textColor={'white'}>{months[month]}</Text>
          </HStack>
          <Heading textColor={'white'} letterSpacing={'2px'}>
            {formattedHour}:{formattedMinute}
          </Heading>
        </VStack>
        <HStack w={'full'} justifyContent={'space-around'} spacing={'8'}>
          <Button p={'2'} variant={'solid'} bg={'blackAlpha.700'} colorScheme='white' borderRadius={'100%'} >
            <GiLightBulb color={'white'}  size={'23px'}/>
          </Button>
       
          <Text p={'2'} bg={'blackAlpha.700'} borderRadius={'100%'}>
            <BsCamera color="white" size={'23px'} />
          </Text>
        </HStack>
        <Link to={'/iphoneX/iphoneXhome'}>
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

export default IphoneX;
