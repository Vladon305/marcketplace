import { ChatSidebar } from "./components/ChatSidebar";
import { ChatMessages } from "./components/ChatMessages";

const Chat = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar />
      <ChatMessages />
    </div>
  );
};

export default Chat;
