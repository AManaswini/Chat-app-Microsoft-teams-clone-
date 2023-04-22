import { ChatEngine } from "react-chat-engine";
import './App.css';
import  ChatFeed  from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
const App=()=>{
    // not logged in
    if(!localStorage.getItem('username')){
          return <LoginForm/>  
    }
    return(
        <ChatEngine
            height="100vh"
            projectID="995917e3-923f-4db3-ae5c-262c51ec22fb"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;

