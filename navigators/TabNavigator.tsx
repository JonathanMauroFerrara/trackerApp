import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colorPalette } from "../constants/colors";
import AllExpenses from "../screens/AllExpenses";
import RecenteExpenses from "../screens/RecenteExpenses";

const BottomTabs = createBottomTabNavigator();

function TabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          console.log(route);
          let iconName: string = "";
          let routeName = route.name;

          if (routeName === "AllExpenses") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? colorPalette.primary500 : "black";
          } else if (routeName === "RecentExpenses") {
            iconName = focused ? "calendar" : "calendar-outline";
            color = focused ? colorPalette.primary500 : "black";
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarStyle: styles.routesContainer,
        tabBarActiveTintColor: "black",
        headerShown: false,
      })}
      initialRouteName="AllExpenses"
    >
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <BottomTabs.Screen name="RecentExpenses" component={RecenteExpenses} />
    </BottomTabs.Navigator>
  );
}

export default TabNavigator;

const styles = StyleSheet.create({
  routesContainer: {
    position: "absolute",
    left: "5%",
    right: "5%",
    bottom: 30,
    height: 50,
    paddingBottom: 0,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
  },
});
