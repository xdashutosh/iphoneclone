import { Box, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/layout';

import { RiWifiFill } from 'react-icons/ri';
import { GiLightBulb, GiNetworkBars } from 'react-icons/gi';
import { BsBatteryHalf, BsFillLockFill, BsCamera } from 'react-icons/bs';

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
        mt={['-24', '-24']}
        border={'5px solid'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        h={'60%'}
        w={['70%', '17%']}
        borderRadius={'3xl'}
        p={'.5'}
      >
        <HStack
          h={'3%'}
          w={'100%'}
          justifyContent={'space-evenly'}
          boxSizing="border-box"
          borderTopRadius={'3xl'}
        >
          <Text fontSize={'12px'} mt={'2'} color={'white'}>
            Airtel
          </Text>
          <HStack
            h={'90%'}
            borderBottomRadius={'xl'}
            ml={'8'}
            w={'35%'}
            justifyContent={'center'}
            bg={'blackAlpha.700'}
          >
            <Box
              h={'50%'}
              w={'40%'}
              borderRadius={'2xl'}
              bg={'blackAlpha.700'}
            ></Box>
            <Box
              h={'8px'}
              w={'8px'}
              borderRadius={'100%'}
              bg={'blackAlpha.700'}
            ></Box>
          </HStack>
          <HStack mt={'2'}>
            <RiWifiFill color="white" size={'12px'} />
            <GiNetworkBars color="white" size={'12px'} />
            <BsBatteryHalf color="white" size={'16px'} />
          </HStack>
        </HStack>
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
          <Text p={'2'} bg={'blackAlpha.700'} borderRadius={'100%'}>
            <GiLightBulb color="white" size={'23px'} />
          </Text>
          <Text p={'2'} bg={'blackAlpha.700'} borderRadius={'100%'}>
            <BsCamera color="white" size={'23px'} />
          </Text>
        </HStack>
        <Box
          h={'1%'}
          w={'40%'}
          mb={'0.5'}
          borderRadius={'2xl'}
          bg={'white'}
        ></Box>
      </VStack>
    </Stack>
  );
}

export default IphoneX;
