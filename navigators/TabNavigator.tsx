import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconButton from "../components/ui/IconButton";
import { colorPalette } from "../constants/colors";
import AddExpenses from "../screens/AddExpenses";
import AllExpenses from "../screens/AllExpenses";
import RecenteExpenses from "../screens/RecenteExpenses";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const BottomTabs = createBottomTabNavigator();
function TabNavigator() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
        component={AddExpenses}
        options={{
          tabBarButton: () => (
            <Pressable>
              <IconButton
                iconName="add"
                size={50}
                onPress={() => navigation.navigate("ManageExpenses")}
                color={colorPalette.white}
                className={styles.closeButtonContainer}
              />
            </Pressable>
          ),
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
  closeButtonContainer: {
    backgroundColor: colorPalette.primary500,
    borderRadius: 50,
    top: -20,
    borderWidth: 1,
    borderColor: colorPalette.white,
  },
});
