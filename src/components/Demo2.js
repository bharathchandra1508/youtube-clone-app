import React, { useEffect, useRef, useState } from 'react';

const Demo2 = () => {

    console.log("Component Rendering");

    const [ y, setY ] = useState(0);

    let x = 0;

    const ref = useRef(0);

    const interval = useRef(null);
    useEffect(() => {
        interval.current = setInterval(() => {
            console.log("Printing "+Math.random());
        }, 1000);
        return () => clearInterval(interval.current);
    }, []);

  return (
    <>
        <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
            <div>
                <span className='font-bold text-xl'>Let = {x}</span>
                <button onClick={() => {x = x + 1;console.log(x);}} className='bg-green-600 px-2 m-4'>Increase X</button>
            </div>
            <div>
                <span className='font-bold text-xl'>State = {y}</span>
                <button onClick={() => {setY(y + 1)}} className='bg-green-600 px-2 m-4'>Increase Y</button>
            </div>
            <div>
                <span className='font-bold text-xl'>Ref = {ref.current}</span>
                <button onClick={() => {ref.current = ref.current + 1;}} className='bg-green-600 px-2 m-4'>Increase Ref</button>
            </div>
            <button className='bg-red-800 p-4 m-4 text-white font-bold rounded-lg' onClick={() => clearInterval(interval.current)}>
                Stop Printing
            </button>
        </div>
    </>
  )
};

export default Demo2;