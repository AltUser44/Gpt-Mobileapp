import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

export default DataItems = (props) => {

    const { title, subTitle, type, onPress, isChecked} = props;

    return <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>
            </View>

            {
                type === "Link" &&
                <View>
                    <FontAwesome6 name="chevron-right" size={20} color={Colors.grey} />
                </View>
            }

            {
                type === "checkbox" &&
                <View style={{...styles.iconContainer, ...(isChecked && styles.checkedStyles)}}>
                    <Ionicons name="checkmark" size={20} color="white" />
                </View>
            }
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.extraLightGreay
       
    },
    title: {
        fontFamily: 'medium',
        fontSize: 16,
        letterSpacing: 0.3,

    },
    subTitle: {
        fontFamily: 'regular',
        letterSpacing: 0.3,
        color: Colors.grey

    },
    textContainer: {
        flex: 1,
        
    },
    iconContainer: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.lightGrey,
        backgroundColor: 'white'
    },
    checkedStyles: {
        backgroundColor: Colors.primary,
        borderColor: 'transparent'
    }
})