import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colorPalette } from "../constants/colors";
import AddExpenses from "../screens/AddExpenses";
import AllExpenses from "../screens/AllExpenses";
import RecenteExpenses from "../screens/RecenteExpenses";

const BottomTabs = createBottomTabNavigator();
const PayScreenComponent = () => {
  return null;
};
function TabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = "";
          let routeName = route.name;

          if (routeName === "AllExpenses") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? colorPalette.primary500 : "black";
          } else if (routeName === "RecentExpenses") {
            iconName = focused ? "calendar" : "calendar-outline";
            color = focused ? colorPalette.primary500 : "black";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarStyle: styles.routesContainer,
        tabBarActiveTintColor: "black",
        headerShown: false,
        tabBarShowLabel: false,
      })}
      initialRouteName="AllExpenses"
    >
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
      <BottomTabs.Screen
        name="addExpenses"
        component={PayScreenComponent}
        options={{
          tabBarButton: () => <AddExpenses />,
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
    left: "15%",
    right: "15%",
    bottom: 30,
    height: 50,
    paddingBottom: 0,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
  },
});
