import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-black">
      <div className='h-32 bg-white flex justify-center items-center flex-col'>
        <img className='h-28' src={logo}/>
      </div>
      <p className='text-white text-2xl mt-10 underline'>
        Oponente
      </p>
      <div className='ml-4 mt-4'>
        <p className='text-white text-2xl'>
          @mk7.backend
        </p>
        <p className='text-white text-2xl'>
          @jetta.shark
        </p>
        <p className='text-white text-2xl'>
          @125i.sonic.purple
        </p>
      </div>
      <p className='text-white text-2xl mt-10 underline'>
        Foto
      </p>
      <p className='text-white text-2xl mt-10 underline'>
        Desafiar
      </p>
    </div>
  );
}

export default App;
