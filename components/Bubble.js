import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../constants/Colors";
const loadingGif = require("../assets/loading.gif");

export default Bubble = (props) => {
    const { text, type } = props;

    const bubbleStyle = type === "assistant"
        ? { ...styles.container, backgroundColor: colors.secondary }
        : { ...styles.container, backgroundColor: colors.primary };

    const wrapperStyle = type === "assistant"
        ? { ...styles.wrapperStyle, justifyContent: 'flex-start' }
        : { ...styles.wrapperStyle, justifyContent: 'flex-end' };

    const textStyle = type === "assistant"
        ? { ...styles.textStyle, color: colors.textColor }
        : { ...styles.textStyle, color: colors.greyBg };

    return (
        <View style={wrapperStyle}>
            { 
                text &&
                <View style={bubbleStyle}>
                    <Text style={textStyle}>{text}</Text>
                </View>
            }

            {
                type === "loading" &&
                <Image
                    source={loadingGif}
                    style={styles.loadingGif}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginBottom: 6,
        maxWidth: "80%",
    },
    wrapperStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 14, 
        fontFamily: "regular"
    },
    loadingGif: {
        width: 80,
        height: 80,
    }
});
