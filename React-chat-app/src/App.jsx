import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine 
            height="100vh"
            projectID="6951f72c-92bd-4fd5-bf8b-bc2b9e3768d5"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} 

        />
    );
}
export default App