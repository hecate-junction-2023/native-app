const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";
import Frame9 from "./screens/Frame9";
import Frame10 from "./screens/Frame10";
import Frame11 from "./screens/Frame11";
import Frame12 from "./screens/Frame12";
import Frame13 from "./screens/Frame13";
import Frame14 from "./screens/Frame14";
import Frame15 from "./screens/Frame15";
import Frame16 from "./screens/Frame16";
import Frame17 from "./screens/Frame17";
import Frame18 from "./screens/Frame18";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame9"
              component={Frame9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10"
              component={Frame10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame11"
              component={Frame11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame12"
              component={Frame12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame13"
              component={Frame13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame14"
              component={Frame14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame15"
              component={Frame15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame16"
              component={Frame16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame17"
              component={Frame17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame18"
              component={Frame18}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
