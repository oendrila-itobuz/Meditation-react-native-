import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NatureMeditation = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
        className="flex-1">
        <SafeAreaView className="flex-1">
          <View className="m-6">
            <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
              Welcome
            </Text>
            <Text className="text-indigo-100 text-xl font-medium">
              Start your meditation practice today
            </Text>
          </View>

          <FlatList
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                className="h-48 m-3 rounded-md overflow-hidden"
                onPress={() => {
                  console.log("Pressed", item.title);
                }}>
                <ImageBackground
                  source={meditationImages[item.id - 1]}
                  className="flex-1 rounded-[20px]">
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center">
                    <Text className="text-white text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default NatureMeditation;
