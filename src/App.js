import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-black">
      <div className='h-32 bg-white flex justify-center items-center flex-col'>
        <img className='h-28' src={logo}/>
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
