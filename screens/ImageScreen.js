import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import color from "../constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState, useCallback, useEffect, useRef } from "react";
import { makeChatRequest, makeImageRequest } from "../utils/gptUtils";
import { addUserMessage, getConversation, resetConversation } from "../utils/conversationHistoryUtils";
import { FlatList } from "react-native"; 
import Bubble from "../components/Bubble";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; 
import CustomHeaderButton from '../components/CustomHeaderButton'; 
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import InputContainer from "../components/InputContainer";


export default function ImageScreen(props) {

    const flatlist = useRef();


    const [messageText, setMessageText] = useState("");
    const [conversation, setConversation] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                title='Clear'
                iconName="trash-can-outline" 
                onPress={() => {
                    setConversation([]);
                    resetConversation();
                }}
                />
            </HeaderButtons>
        })

    }, []);

    useEffect(() => {
        resetConversation();
        setConversation([]);
    }, []);

    const handleSend = useCallback(async () => {
        if (messageText && messageText.trim() !== "") {

            const text = messageText;
            const tempConversation = [ ...conversation, text];

            try {
                setLoading(true);
                setMessageText("");
                setConversation(tempConversation);

                const responseData = await makeImageRequest(text);

                const urls = responseData.map(i => i.url);
                tempConversation.push(...urls);
                setConversation(tempConversation);
            } catch (error) {
                console.error("Error sending message:", error);
                setMessageText(text);
            }
            finally {
                setLoading(false);
            }
        }

    }, [messageText]);

    return (
        <View style={styles.container}> 
            <View style={styles.messagesContainer}>

                {
                    !loading && conversation.length === 0 &&
                    <View style={styles.emptyContainer}>
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={48} color={color.lightGrey}/>
                        <Text style={styles.emptyContainerText}>Type a message to get started!</Text>
                    </View>

                }

                {
                    conversation.length !== 0 &&
                    <FlatList
                    ref={(ref) => flatlist.current = ref}
                    onLayout={() => flatlist.current.scrollToEnd()}
                    onContentSizeChange={() => flatlist.current.scrollToEnd()}
                    style={styles.flatList}
                    data={conversation}
                    renderItem={(itemData) => {
                        const convoItem = itemData.item;

                        if (convoItem.startsWith("http://") || convoItem.startsWith("https://")) {
                            return <Image 
                                style={{ marginBottom: 10, height: 256, width: 256 }}
                                source={{ uri: convoItem }}
                            />
                        }
                        

                        return <Bubble
                            text={convoItem}
                            type={"user"}
                        />
                    }}

                    />
                }


                {
                    loading &&
                    <View style={styles.loadingContainer}>
                        <Bubble
                    type="loading"
                        />
                    </View>
                }
                </View>

                <InputContainer
                onChangeText={(text) => setMessageText(text)}
                value={messageText}
                onPress={handleSend}
                placeholder="Type to generate an image..."
                
                />

            
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: color.greyBg,
    },
    messagesContainer: {
        flex: 1,
    },
    messagesContainer: {
        flex: 1
    },
    flatList: {
        marginHorizontal: 15,
        paddingVertical: 10
    },
    loadingContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center'
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyContainerText: {
        marginTop: 10,
        color: color.lightGrey,
        fontSize: 18,
        fontFamily: 'regular'
    }
});
