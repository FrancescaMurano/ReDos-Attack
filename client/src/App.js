import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import LoginContext from './contexts/LoginContext';
import { useContext } from "react";

function App() {
  const {login} = useContext(LoginContext);
  return (
    <div className="App flex flex-col items-center place-content-evenly h-screen bg-indigo-100">
     <div className='flex items-center flex-col w-100'>
      <Form></Form>
      </div> 
</div>
  );
}

export default App;
