let conversation = [];

export const getConversation = () => conversation;

export const initConversation = (personality, mood, responseSize) => {

    let messageString = "You are a virtual assistant named Jeff. ";

    if (personality !== "normal" ) {
        messageString += `respond as if you are a " ${personality}. `;
    }

    if (mood !== "normal" ) {
        messageString += `Your mood is: " ${mood}. `;
    }

    if (responseSize !== "medium" ) {
        messageString += `Responsize: " ${responseSize}. `;
    }
    
    addSystemMessage(messageString);
}

export const addUserMessage = (messageText) => {
    conversation.push({
        role: "user",
        content: messageText
    });
};

export const addAssistantMessage = (messageText) => {
    conversation.push({
        role: "assistant",
        content: messageText
    });
};

export const addSystemMessage = (messageText) => {
    conversation.push({
        role: "system",
        content: messageText
    });
};

export const resetConversation = (personality, mood, responseSize) => {
    conversation = [];
    initConversation(personality, mood, responseSize);
}