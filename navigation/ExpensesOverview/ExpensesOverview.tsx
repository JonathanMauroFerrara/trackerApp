import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colorPalette } from "../../constants/colors";
import AllExpenses from "../../screens/AllExpenses";
import RecenteExpenses from "../../screens/RecenteExpenses";
import CustomTabBar from "../CustomTabBar/CustomTabBar";

const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colorPalette.primary500 },
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
        }}
      />
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecenteExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recents",
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default ExpensesOverview;
