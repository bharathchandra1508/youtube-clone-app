import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../utils/slices/chatSlice";
import { generateRandomName, makeRandomMessage } from '../utils/nameHelper';

const LiveChat = () => {

    const [ liveMessage, setLiveMessage ] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            <div>
                {chatMessages.map((chatMessage, index) => <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message}/>)}
            </div>
        </div>
        <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name: "Bharath",
                message: liveMessage,
            }));
            setLiveMessage("");
        }}>
            <input className='px-2 w-72' type='text' value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value)}}/>
            <button className='px-2 mx-2 bg-green-300'>Send</button>
        </form>
    </>
  )
}

export default LiveChat;