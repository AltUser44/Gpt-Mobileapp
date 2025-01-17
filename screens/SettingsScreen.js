import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DataItem from "../components/DataItem";
import { moods, personalities, responseSizes } from "../constants/settings";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../store/settingsSclice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen(props) {

    const dispatch = useDispatch();

    const personality = useSelector(state => state.settings.personality);
    const mood = useSelector(state => state.settings.mood); 
    const responseSize = useSelector(state => state.settings.responseSize); 

    const allSettings = useSelector(state => state.settings)


    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Settings'
        })
    }, []);

    const updateValue = useCallback(async (key, value) => {
        try {
        await AsyncStorage.setItem(key, value)
        dispatch(setItem({ key, value }))
        props.navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <View style={styles.container}> 
        <DataItem
        title="Personality"
        subTitle={personality}
        type="Link"
        onPress={() => {
            props.navigation.navigate("DataListScreen", {
                data: personalities,
                title: "Personalities",
                onPress: (value) => updateValue("personality", value),
                selectedValue: personality
            })
        }}
        />

        <DataItem
        title="Mood"
        subTitle={mood}
        type="Link"
        onPress={() => {
            props.navigation.navigate("DataListScreen", {
                data: moods,
                title: "Moods",
                onPress: (value) => updateValue("mood", value),
                selectedValue: mood
            })
        }}
        />

        <DataItem
        title="Response size"
        subTitle={responseSize}
        type="Link"
        onPress={() => {
            props.navigation.navigate("DataListScreen", {
                data: responseSizes,
                title: "Response size",
                onPress: (value) => updateValue("responseSize", value),
                selectedValue: responseSize
            })
        }}
        />

        <DataItem
        title="Advanced setting"
        subTitle="Additional model settings"
        type="Link"
        onPress={() => {
            props.navigation.navigate("AdvancedSettingsScreen")
        }}
        />
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    }
});
