import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

interface AffirmationItem {
  image: any;
  text?: string;
}

interface AffirmationsProps {
  itemList: AffirmationItem[];
  title: string;
}

const Affirmations = ({ itemList, title }: AffirmationsProps) => {
  return (
    <View className="mx-6 my-4">
      <Text className="text-zinc-50 font-bold text-2xl mb-4">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {itemList.map((item, index) => (
          <Pressable key={index} className="mr-4">
            <ImageBackground
              source={item.image}
              resizeMode="cover"
              className="w-[200px] h-48 rounded-xl overflow-hidden">
              <LinearGradient
                colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.6)"]}
                className="flex-1 justify-end p-4">
                <Text></Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Affirmations;
