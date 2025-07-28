'use client';
import { useListingStore } from '../store/useListings';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaCopy, FaCheck, FaChevronLeft, FaChevronRight, FaComments } from 'react-icons/fa';
import { IoSendOutline } from "react-icons/io5";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot,
} from 'recharts';

function generateChartData() {
  let base = Math.floor(Math.random() * 50 + 50);
  return Array.from({ length: 7 }, (_, i) => {
    const change = Math.floor(Math.random() * 20 - 10);
    base = Math.max(10, base + change);
    return { name: `D${i + 1}`, demand: base };
  });
}

export default function ProductPage() {
  const { currentListing } = useListingStore();
  const [copied, setCopied] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hey! I’m here to answer any questions about this product.' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const chartData = generateChartData();
  const max = chartData.reduce((a, b) => (a.demand > b.demand ? a : b));
  const min = chartData.reduce((a, b) => (a.demand < b.demand ? a : b));

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentListing?.url || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: "That's a great question. Here's what I think..." }]);
    }, 500);
    setInput('');
  };

  if (!currentListing) return <p className="text-white p-6">No product selected.</p>;

  return (
    <div className="fixed inset-0 h-[100dvh] w-full max-w-screen overflow-x-hidden flex flex-col md:flex-row bg-gray-900 text-white touch-none">
      {/* LEFT SIDE (Main content) */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-60 h-60 rounded-xl overflow-hidden shrink-0 mx-auto">
            <Image
              src={currentListing.images[currentImage]}
              alt="product"
              fill
              className="object-cover rounded-xl"
              unoptimized
            />
            <button onClick={() => setCurrentImage(prev => (prev === 0 ? currentListing.images.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full">
              <FaChevronLeft />
            </button>
            <button onClick={() => setCurrentImage(prev => (prev + 1) % currentListing.images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full">
              <FaChevronRight />
            </button>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-xl font-bold text-cyan-400 break-words break-all">{currentListing.title}</h1>
            <p className="text-lg font-semibold">{currentListing.price}</p>
            <div className="bg-gray-800 p-3 rounded-lg text-sm space-y-1">
              <p><span className="text-gray-400">Condition:</span> {currentListing.details}</p>
              <p><span className="text-gray-400">Location:</span> {currentListing.location}</p>
              <p><span className="text-gray-400">Rating:</span> {currentListing.seller_rating}</p>
              <p className="flex items-center gap-2">
                <span className="text-gray-400">seller:</span>
                <a href={currentListing.seller} target="_blank" className="text-cyan-400 underline break-all">Open</a>
                <button onClick={handleCopy} className="text-cyan-400 hover:text-white transition">
                  {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                </button>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-400">URL:</span>
                <a href={currentListing.url} target="_blank" className="text-cyan-400 underline break-all">Open</a>
                <button onClick={handleCopy} className="text-cyan-400 hover:text-white transition">
                  {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                </button>
              </p>
            </div>
            <div className="flex gap-3 text-xs mt-2 flex-wrap">
              <span className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full">Category: {currentListing.category || 'N/A'}</span>
              <span className="bg-red-800 text-red-200 px-3 py-1 rounded-full">Risk: {currentListing.risk_level || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-cyan-400 font-semibold text-sm mb-2">🤖 AI Opinion</h3>
            <p>This product looks well-priced and highly demanded. Strong buy for a quick resale.</p>
            <p className="text-xs text-gray-400 mt-1">Confidence: {currentListing.ai_confidence || 87}%</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-cyan-400 font-semibold text-sm mb-2">📃 Description</h3>
            <p className="whitespace-pre-wrap break-words">{currentListing.details}</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl mt-4">
          <h3 className="text-cyan-400 font-semibold text-sm mb-2">📈 Demand Chart</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#ccc" fontSize={10} />
                <YAxis stroke="#ccc" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }} />
                <Line type="monotone" dataKey="demand" stroke="#22d3ee" strokeWidth={2} fill="url(#chartGradient)" dot={false} />
                <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white" />
                <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Desktop AI chat */}
      <div className="hidden lg:flex flex-col w-[30%] bg-gray-950 p-4 overflow-y-auto scrollbar-hide">
        <h2 className="text-cyan-400 font-bold text-sm mb-2">💬 AI Chat Assistant</h2>
        <div className="bg-gray-800 rounded-xl flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide" ref={chatRef}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm max-w-xs w-fit break-words whitespace-pre-wrap p-2 rounded-lg ${msg.sender === 'user' ? 'bg-cyan-500 text-white self-end ml-auto' : 'bg-gray-700 text-white self-start mr-auto'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-700 p-2 gap-2 items-center">
            <input
              type="text"
              className="bg-gray-900 flex-1 px-3 py-2 rounded-lg text-sm text-white outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <IoSendOutline onClick={sendMessage} className="text-cyan-500 rounded-lg text-3xl font-bold" />
          </div>
        </div>
      </div>

      {/* Mobile chat button */}
      <button onClick={() => setChatOpen(true)} className="fixed bottom-6 right-6 lg:hidden bg-cyan-500 text-white p-4 rounded-full shadow-lg z-50">
        <FaComments />
      </button>

      {/* Mobile chat modal */}
      {chatOpen && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-70 flex flex-col">
          <div className="bg-gray-800 flex flex-col h-[100dvh] max-h-[100dvh]">
            <div className="flex justify-between items-center p-3 border-b border-gray-700">
              <h3 className="text-cyan-400 font-bold">AI Chat</h3>
              <button onClick={() => setChatOpen(false)} className="text-white text-sm">Close</button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide" ref={chatRef}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm max-w-xs w-fit break-words whitespace-pre-wrap p-2 rounded-lg ${msg.sender === 'user' ? 'bg-cyan-500 text-white self-end ml-auto' : 'bg-gray-700 text-white self-start mr-auto'}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex p-2 border-t border-gray-700 gap-2 bg-gray-900 justify-center items-center">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg text-white outline-none bg-gray-800 text-[16px]"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <IoSendOutline onClick={sendMessage} className="text-cyan-500 rounded-lg text-3xl font-bold" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
