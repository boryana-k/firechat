import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="app">
      <header className='app-name'>
        <h1>🔥FireChat</h1>
      </header>

      <section>
        {user ? <Chat /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;