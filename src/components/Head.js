import React, { useEffect, useState } from 'react';
import { HAMBURGER_MENU_ICON_URL, USER_ICON_URL, YOUTUBE_LOGO_URL, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/slices/appSlice';
import { cacheResults } from "../utils/slices/searchSlice";

const Head = () => {

  const [ searchQuery, setSearchQuery ] = useState("");
  const [ suggestions, setSuggestions ] = useState([]);
  const [ showSuggestions, setShowSuggestions ] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {

    // Make an API Call after every key press
    // But it the difference between 2 API Calls is <200ms, Decline the API Call

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    //console.log("API Call for "+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // Update Cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} alt="menu" src={HAMBURGER_MENU_ICON_URL} className='h-10 cursor-pointer'/>
            <a href='/'>
              <img alt="youtube-logo" src={YOUTUBE_LOGO_URL} className='h-10 mx-2'/>
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <div>
              <input type="text" 
                          className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
                          value={searchQuery} 
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={() => setShowSuggestions(true)}
                          onBlur={() => setShowSuggestions(false)}/>
              <button className='border border-gray-)400 px-5 py-2 rounded-r-full bg-gray-100'> 🔍 </button>
            </div>
            {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100'>
              <ul>
                {suggestions.map((s) => (<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>))}
              </ul>
            </div>)}
        </div>
        <div className='col-span-1'>
            <img alt="user" src={USER_ICON_URL} className='h-10'/>
        </div>
    </div>
  )
}

export default Head;