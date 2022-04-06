import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getQuote} from './quoteSlice';
import axios from 'axios';
import { ImQuotesLeft } from "react-icons/im";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Quote = () => {
    const dispatch = useDispatch();
    const quote = useSelector((state)=> state.quote.quoteData)
    const [loader, setLoader] = useState(false);
    const handlegetQuote = async() => {
           setLoader(true);
            const res = await axios.get('https://quotable.io/random');
            if(res){

                const data = {
                    _id : res.data._id,
                    content : res.data.content,
                    author: res.data.author,
                    authorSlug : res.data.authorSlug,
                }
                dispatch(getQuote(data));
                setLoader(false);
            }
    }
    useEffect(()=>{
        handlegetQuote()
    }, []);
    return (
        <>
        <div className="flex h-auto p-2 bg-cover bg-center overflow-hidden"
        style={{
            background: "url('https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=pexels-pixabay-210186.jpg&fm=jpg')"
        }}>
            <div className="h-screen border border-2 rounded-xl w-full bg-black opacity-50 absolute"> 
             
            </div>
            <div className="h-screen border border-2 rounded-xl w-full z-100 relative flex flex-col justify-center items-center"> 
                <div className="text-white text-6xl mb-10"> 
                <ImQuotesLeft />
                </div>  
                <div className=" flex flex-col items-center w-4/5 text-center">
                    { loader ? (
                            <AiOutlineLoading3Quarters className="text-white text-6xl animate-spin font-bold" />
                    ) : (
                        <>
                        <div className="text-white text-4xl font-thin"> 
                        {quote?.content}
                        </div>
    
                        <div className="text-white text-3xl mt-10 font-medium"> 
                        - {quote?.author}
                        </div>
                        </>
                    )}
                   
                </div>
                <div className="flex justify-center items-center mt-16 absolute bottom-0 mb-5">
                    <button className="rounded-full px-3 w-auto bg-blue-700 font-bold text-white py-1 hover:bg-blue-500 shadow-xl" onClick={handlegetQuote} >Get Another Quote </button>
                </div>
            </div>

        </div>
        </>
    )
}
export default Quote;