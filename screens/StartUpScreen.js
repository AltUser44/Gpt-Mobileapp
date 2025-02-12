import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native"; 
import Colors from "../constants/Colors";
import MainNavigator from "../components/MainNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setAdvancedItem, setItem } from "../store/settingsSclice";
import { advancedSettings } from "../constants/settings";

export default StartUpScreen = () => {
    const dispatch = useDispatch();

    const [initialised, setInitialised] = useState(false); 

    useEffect(() => {

        const getSettings = async () => {
            try {
                const personality = await AsyncStorage.getItem("personality");
                if(personality) {
                    dispatch(setItem({ key: "personality", value: personality}))

                }

                const mood = await AsyncStorage.getItem("mood");
                if(mood) {
                    dispatch(setItem({ key: "mood", value: mood}))

                }

                const responseSize = await AsyncStorage.getItem("responseSize");
                if(responseSize) {
                    dispatch(setItem({ key: "responseSize", value: responseSize}))

                }

                for (let i = 0; i < advancedSettings.length; i++) {
                    const optionData = advancedSettings[i];

                    const id = optionData.id;

                    const value = await AsyncStorage.getItem(id);
                    value !== null && dispatch(setAdvancedItem({ key: id, value}));
                }

            } catch (error) {
                console.log(error)
            }
            finally {
                setInitialised(true);
            }
        }
        getSettings();
    }, [])

    if (!initialised) {
        return <View style={styles.center}>
                <ActivityIndicator size={"large"} color={Colors.primary} />
            </View>
    }

    return <MainNavigator />;
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})