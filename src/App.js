import { useState } from 'react';
import './App.css';
import Login from './Login';
import Registration from './Registration';

function App() {

  const [isUser, setIsUser] = useState(false);

  return (
    <div className="App min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/3 sm:w-2/3 w-full">

          {isUser ? <Login /> : <Registration />}

          <button className="mt-2 underline text-dark-500 hover:no-underline mx-auto block" 
          onClick={() => setIsUser(!isUser)}>
            {isUser ? 'Hesab yarat' : 'Hesabına daxil ol'}
          </button>

        </div>
    </div>
  );
}

export default App;
