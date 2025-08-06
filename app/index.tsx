import CustomButton from "@/components/CustomButton";
import meditationImages from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
const App = () => {
  const router = useRouter()
  return (
    <View className='flex-1'>
      <ImageBackground source={meditationImages[3]} resizeMode="cover" className='flex-1'>
        <LinearGradient colors={['rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.4)']} style={{ flex: 1 }}>
          <SafeAreaView className='flex flex-column justify-between h-screen'>
            <View>
              <Text className='text-white text-center text-4xl font-bold'>
                Meditation
              </Text>
              <Text className='text-white text-center text-2xl mt-2'>
               Simplifying Meditation for Everyone
              </Text>
            </View>
            <View className="mx-6 my-4">
              <CustomButton onPress={() => router.push("/nature-meditation")} title="Get Started" />
            </View>
            <StatusBar style='light' />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App