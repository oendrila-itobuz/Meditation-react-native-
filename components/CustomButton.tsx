import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
}

const CustomButton = ({
    onPress,
    title,
}: CustomButtonProps) => {
  return (
 <TouchableOpacity className='bg-white py-5 px-4 rounded-lg' onPress={onPress}>
  <Text className='font-semibold text-[20px] text-center'>
    {title}
  </Text>
 </TouchableOpacity>
  )
}

export default CustomButton