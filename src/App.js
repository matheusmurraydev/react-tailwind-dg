import './App.css';

import logo from './imgs/logo.png';

import golf_branco from './imgs/golf-branco.png';
import golf_nardo from './imgs/golf-nardo.png';
import golf_lima from './imgs/golf-lima.png';
import golf_preto from './imgs/golf-preto.png';

import f1 from './imgs/f1.png';
import f2 from './imgs/f2.png';
import f3 from './imgs/f3.png';
import f4 from './imgs/f4.png';


function App() {
  return (
    <div className="h-screen bg-black">
      <div className='h-32 bg-white flex justify-center items-center flex-col'>
        <img className='h-28' src={logo}/>
      </div>
      <Oponente/>
      <p className='text-white text-2xl mt-10 underline'>
        Foto
      </p>
      <img className='h-28' src={f1}/>
      <img className='h-28' src={f2}/>
      <img className='h-28' src={f3}/>
      <img className='h-28' src={f4}/>
      <p className='text-white text-2xl mt-10 underline'>
        Desafiar
      </p>
    </div>
  );
}

function Oponente() {
  return (
    <div>
      <p className='text-white text-2xl mt-10 underline'>
        Oponente
      </p>
      <div className='ml-4 mt-4'>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_branco}/>
          <p className='text-white text-2xl my-auto ml-4'>
            @mk7.snow
          </p>
        </div>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_nardo}/>
          <p className='text-white text-2xl my-auto ml-4'>
            @gti.nardo
          </p>
        </div>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_preto}/>
          <p className='text-white text-2xl my-auto ml-4'>
            @black.panther
          </p>
        </div>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_lima}/>
          <p className='text-white text-2xl my-auto ml-4'>
            @lima.mk7
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
