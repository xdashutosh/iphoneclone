import { Box, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { BsBatteryHalf } from 'react-icons/bs'
import { GiNetworkBars } from 'react-icons/gi'
import { RiWifiFill } from 'react-icons/ri'

const Iphonetop = () => {
  return (
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
  )
}

export default Iphonetop
