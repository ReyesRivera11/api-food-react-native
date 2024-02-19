import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Style'

const Category = ({ name, img, category,fun }) => {
  const handleChangeCategory = () => {
    // console.log(name)
    fun(name);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={()=>handleChangeCategory()}>
      <View style={[styles.containerImg,{backgroundColor:(category === name)?"#d5e1e8":"#e69138"}]} >
        <Image style={styles.img} source={{ uri: img }} />
      </View>
      <Text >{name}</Text>
    </TouchableOpacity>
  )
}

export default Category