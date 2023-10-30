import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const Phones = () => {
  return (
    <HStack w={'full'} p={'8'} spacing={'16'}> 
  <Link to={'/iphoneX'}><Button>Iphone</Button></Link>
  <Link to={'/samsungfold'}><Button>Samsung Fold</Button></Link>
  <Link to={'/redmi'}><Button>Samsung Fold</Button></Link>
    </HStack>
  )
}

export default Phones
