import './App.css';

import {useState} from 'react';

import logo from './imgs/logo.png';
import swords from './imgs/swords.png';

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
    <div className="h-fit bg-black">
      <Header/>
      <Oponente/>
      <MeuCarro/>
      <Desafiar/>
    </div>
  );
}

function Header() {
  return (
    <div className='h-32 bg-white flex justify-center items-center flex-col'>
      <img className='h-28' src={logo} alt=''/>
    </div>
  );
}

function Oponente() {

  const [b_1, setB1] = useState('flex mb-2');
  const [b_2, setB2] = useState('flex mb-2');
  const [b_3, setB3] = useState('flex mb-2');
  const [b_4, setB4] = useState('flex mb-2');

  function selected(button) {

    if (button === 'b-1') {
      setB1('flex mb-2 bg-gray-800 rounded w-80 pl-3 py-1')
      setB2('flex mb-2')
      setB3('flex mb-2')
      setB4('flex mb-2')
    }
    if (button === 'b-2') {
      setB1('flex mb-2')
      setB2('flex mb-2 bg-gray-800 rounded w-80 pl-3 py-1')
      setB3('flex mb-2')
      setB4('flex mb-2')
    }
    if (button === 'b-3') {
      setB1('flex mb-2')
      setB2('flex mb-2')
      setB3('flex mb-2 bg-gray-800 rounded w-80 pl-3 py-1')
      setB4('flex mb-2')
    }
    if (button === 'b-4') {
      setB1('flex mb-2')
      setB2('flex mb-2')
      setB3('flex mb-2')
      setB4('flex mb-2 bg-gray-800 rounded w-80 pl-3 py-1')
    }
  }

  return (
    <div className='px-5'>
      <p className='text-white text-2xl mt-10 mb-5 underline'>
        Oponente
      </p>
      <div className='ml-4'>
        <button id='b-1' className={b_1} onClick={() => selected("b-1")}>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_branco} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @mk7.snow
          </p>
        </button>
        <button id='b-2' className={b_2} onClick={() => selected("b-2")}>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_nardo} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @gti.nardo
          </p>
        </button>selected
        <button id='b-3' className={b_3} onClick={() => selected("b-3")}>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_preto} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @black.panther
          </p>
        </button>
        <button id='b-4' className={b_4} onClick={() => selected("b-4")}>
          <img className='object-cover h-14 w-14 rounded-full' src={golf_lima} alt=''/>
          <p className='text-white text-2xl my-auto ml-4'>
            @lima.mk7
          </p>
        </button>
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

function Desafiar() {
  return (
    <button className="bg-white hover:bg-gray-300 text-white font-bold py-2 px-10 mx-6 my-5 rounded">
      <div className='w-fit'>
        <div className="grid grid-cols-2">
          <img className='h-6 w-6 m-1 object-cover align-bottom' src={swords} alt=''/>
          <p className='my-auto text-black h-fit'>Desafiar</p>
        </div>
      </div>
    </button>
  );
}

export default App;
