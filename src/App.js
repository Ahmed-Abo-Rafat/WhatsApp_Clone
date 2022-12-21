import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import { useStateValue } from './components/StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention for class
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Chat />} />
            <Route path='/rooms/:roomId' element={<Chat />} />
          </Routes>
      </div>
      )}
      
    </div>
  );
}

export default App;
