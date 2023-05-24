import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./screens/AllExpenses";
import RecenteExpenses from "./screens/RecenteExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import { colorPalette } from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colorPalette.primary500 },
        tabBarStyle: { backgroundColor: colorPalette.primary500 },
        tabBarActiveTintColor: "black",
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecenteExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recents",
          tabBarIcon: ({ color, size }) => <Ionicons size={25} name="today" />,
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => <Ionicons size={25} name="wallet" />,
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
