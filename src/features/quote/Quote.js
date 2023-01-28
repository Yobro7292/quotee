import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuote } from "./quoteSlice";
import axios from "axios";
import { ImQuotesLeft } from "react-icons/im";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quoteData);
  const [loader, setLoader] = useState(false);
  const handlegetQuote = async () => {
    setLoader(true);
    const res = await axios.get("https://quotable.io/random");
    if (res) {
      const data = {
        _id: res.data._id,
        content: res.data.content,
        author: res.data.author,
        authorSlug: res.data.authorSlug,
      };
      dispatch(getQuote(data));
      setLoader(false);
    }
  };
  useEffect(() => {
    handlegetQuote();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="h-screen w-full bg-gray-300 relative flex flex-col justify-center items-center">
        <div className="text-gray-900 text-6xl mb-10">
          <ImQuotesLeft />
        </div>
        <div className=" flex flex-col items-center w-4/5 text-left">
          <div className="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl w-full sm:w-1/2 h-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            {loader ? (
              <div className="w-full flex justify-center items-center h-1/2">
                <AiOutlineLoading3Quarters className="text-gray-700 text-6xl animate-spin font-bold" />
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white">
                  - {quote?.author}
                </h3>
                <p className="mt-4 text-md text-gray-300">{quote?.content}</p>
              </>
            )}
          </div>
          <button
            className="inline-block mt-12 rounded border border-gray-600 px-12 py-3 text-sm font-medium text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-none active:bg-gray-500"
            onClick={handlegetQuote}
          >
            Get Another Quote{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default Quote;
