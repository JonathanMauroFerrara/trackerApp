import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type IoniconsIconName = keyof (typeof Ionicons)["glyphMap"];

function CustomTabBar({ navigation, state, descriptors }: any) {
  const getIcon = (iconName: string): IoniconsIconName | undefined => {
    switch (iconName) {
      case "All":
        return "home";
      case "Recents":
        return "calendar";
      default:
        return undefined;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.routesContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          // const onLongPress = () => {
          //   navigation.emit({
          //     type: "tabLongPress",
          //     target: route.key,
          //   });
          // };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
              // onLongPress={onLongPress}
            >
              <Ionicons name={getIcon(options.tabBarLabel)} size={35} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  routesContainer: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "white",
    width: "85%",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
});
