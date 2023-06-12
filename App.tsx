import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ExpensesContextProvider from "./context/expense-context";
import TabNavigator from "./navigators/TabNavigator";
import ManageExpenses from "./screens/ManageExpenses";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ExpensesOverview" component={TabNavigator} />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
