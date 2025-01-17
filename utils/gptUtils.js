import { addAssistantMessage, getConversation } from "./conversationHistoryUtils";

export const makeImageRequest = async(prompt) => {
  const response = await fetch("http://10.0.2.2:3000/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to make image request");
  }

  const data = await response.json();
  return data.response;

}
export const makeChatRequest = async (chatOptions) => {
  const response = await fetch("http://10.0.2.2:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: getConversation(),
      chatOptions: chatOptions
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to make chat request");
  }

  const data = await response.json();
  addAssistantMessage(data.response);
};

