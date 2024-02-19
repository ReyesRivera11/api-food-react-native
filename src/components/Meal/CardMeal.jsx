import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles'
const CardMeal = ({name,img}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.img} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{name}</Text>
    </View>
  )
}

export default CardMeal