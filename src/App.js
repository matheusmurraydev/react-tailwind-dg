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
        <img className='h-28' src={logo} alt=''/>
      </div>
      <Oponente/>
      <MeuCarro/>
      <p className='text-white text-2xl mt-10 underline'>
        Desafiar
      </p>
    </div>
  );
}

function Oponente() {
  return (
    <div className='px-5'>
      <p className='text-white text-2xl mt-10 mb-5 underline'>
        Oponente
      </p>
      <div className='ml-4'>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_branco} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @mk7.snow
          </p>
        </div>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_nardo} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @gti.nardo
          </p>
        </div>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_preto} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @black.panther
          </p>
        </div>
        <div className='flex mb-2'>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_lima} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @lima.mk7
          </p>
        </div>
      </div>
    </div>
  );
}

function MeuCarro() {
  return (
    <div className='px-5'>
      <p className='text-white text-2xl mt-10 mb-5 underline'>
        Foto
      </p>
      <div className='w-fit'>
        <div className="grid gap-2 grid-cols-2 grid-rows-2">
          <img className='h-72 w-72 m-1 object-cover' src={f1} alt=''/>
          <img className='h-72 w-72 m-1 object-cover' src={f2} alt=''/>
          <img className='h-72 w-72 m-1 object-cover' src={f3} alt=''/>
          <img className='h-72 w-72 m-1 object-cover' src={f4} alt=''/>
        </div>
      </div>
    </div>
  );
}

export default App;
