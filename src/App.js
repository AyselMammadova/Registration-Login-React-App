import './App.css';
import Registration from './Registration';

function App() {
  return (
    <div className="App min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 grid-cols-2 w-11/12">
          <div className="flex-1">
              <Registration />
          </div>
      </div>
    </div>
  );
}

export default App;
