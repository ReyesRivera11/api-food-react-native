import { View, Text, Image } from 'react-native'
import React from 'react'
import { stylesHeader } from './Styles'

const Header = () => {
  return (
    <View style={stylesHeader.container}>
      <Image style={stylesHeader.logo} source={require("../../../assets/logo-small.png")}/>
    </View>
  )
}

export default Header