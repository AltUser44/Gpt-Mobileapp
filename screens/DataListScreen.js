import { FlatList, StyleSheet, View } from "react-native"
import { personalities } from "../constants/settings"
import DataItem from "../components/DataItem";
import { useEffect } from "react";

export default DataListScreen = props => {

    const { data, title, onPress, selectedValue } = props.route.params;

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: title
        })
    }, [title])

    return <View style={styles.container}>
        <FlatList
        data={data}
        renderItem={(itemData) => {
            const item = itemData.item;
            return <DataItem 
                title={item}
                onPress={() => onPress(item)}
                type="checkbox"
                isChecked={item === selectedValue}
            />
        }}

        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        padding: 10
    }
})