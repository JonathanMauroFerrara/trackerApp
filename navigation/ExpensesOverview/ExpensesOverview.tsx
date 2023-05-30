import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { colorPalette } from "../../constants/colors";
import AllExpenses from "../../screens/AllExpenses";
import RecenteExpenses from "../../screens/RecenteExpenses";

const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colorPalette.primary500 },
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
      // tabBar={(props) => <MyTabBar {...props} />}
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

export default ExpensesOverview;
