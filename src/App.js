import {useNavigate} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';


function App() {
  const Navigate =useNavigate();

  return (
    <div className="App">
    <header className="App-header">
        <h1>Welcome</h1>
        <button className='users-button' onClick={() => Navigate('/users')}>User</button>
        
      </header> 
      
    </div>
  );
}

export default App;
