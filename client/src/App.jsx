import React, { useState } from "react";
import { HiChartBar } from "react-icons/hi";

const App = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [recentUrls, setRecentUrls] = useState([]);

  // Sending request for URL shortening
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };


  return (
    <>
      <div className="max-w-6xl px-4 mx-auto min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-purple-100">
        <h2 className="text-center mt-2 text-5xl font-extrabold text-purple-600 tracking-wide drop-shadow-md">
          URL Shortener
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col max-w-lg w-full mt-10 bg-white shadow-lg rounded-lg p-6"
        >
          <label className="text-gray-700 text-sm font-medium">Enter URL</label>
          <input
            type="text"
            className="border mt-2 px-3 py-2 rounded-md border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="https://example.com"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button className="self-center cursor-pointer mt-4 px-4 py-2 rounded-md w-1/3 bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-200 shadow-md">
            Submit
          </button>
        </form>

        {/* Display the generated short URL */}
        {shortUrl && (
          <div className="mt-6 max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">
              Generated Short URL
            </h3>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 underline hover:text-purple-700"
            >
              {shortUrl}
            </a>
          </div>
        )}

        {/* Recent URLs Section */}
        <div className="max-w-lg w-full mt-10 mb-10 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Recent URLs</h3>
          <ul className="space-y-4">
            {recentUrls.map((url, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-purple-50 px-4 py-2 rounded-md shadow-sm text-purple-700"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{url.longUrl}</span>
                  <a
                    href={url.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 underline hover:text-purple-700 text-sm"
                  >
                    {url.shortUrl}
                  </a>
                </div>
                <HiChartBar size={20} className="text-purple-500 cursor-pointer mr-3" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
