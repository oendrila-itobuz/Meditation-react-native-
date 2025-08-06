import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const affirmation = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#2e1f58", "#54426b", "#a790af"]}
        className="h-screen">
        <SafeAreaView className="flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-zinc-50 font-bold text-3xl mx-6 my-4">
              Change your beliefs with Affirmations
            </Text>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default affirmation;
