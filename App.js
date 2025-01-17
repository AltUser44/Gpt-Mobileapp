import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./components/MainNavigator";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import StartUpScreen from './screens/StartUpScreen';
import { HeaderButtons } from 'react-navigation-header-buttons';


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        "black": require("./assets/fonts/PlayfairDisplay-Black.ttf"),
        "blackItalic": require("./assets/fonts/PlayfairDisplay-BlackItalic.ttf"),
        "blackBold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
        "boldItalic": require("./assets/fonts/PlayfairDisplay-BoldItalic.ttf"),
        "extraBold": require("./assets/fonts/PlayfairDisplay-ExtraBold.ttf"),
        "extraBoldItalic": require("./assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
        "italic": require("./assets/fonts/PlayfairDisplay-Italic.ttf"),
        "medium": require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
        "mediumItalic": require("./assets/fonts/PlayfairDisplay-MediumItalic.ttf"),
        "regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
        "semiBold": require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
        "semiBoldItalic": require("./assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf")
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // hide splashscreen
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <StartUpScreen />
            </NavigationContainer>
        </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
