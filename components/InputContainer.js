import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import color from "../constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default InputContainer = (props) => {
    const { onChangeText, value, onPress, placeholder } = props;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textbox}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity
                style={[
                    styles.sendButton,
                    !value.trim() && { backgroundColor: color.disabled },
                ]}
                onPress={onPress}
                disabled={!value.trim()}
            >
                <FontAwesome name="send" size={18} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },
    textbox: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        fontFamily: 'regular',
        letterSpacing: 0.5,
    },
    sendButton: {
        backgroundColor: color.primary,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
});
