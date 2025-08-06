import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tabs.Screen
        name="nature-meditation"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="leaf" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmation"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default Tabslayout;
