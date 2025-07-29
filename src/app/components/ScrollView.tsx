'use client';
import { useRouter } from 'next/navigation';
import { useListingStore } from '../store/useListings';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaComments, FaPlus } from 'react-icons/fa';
import { IoSendOutline } from 'react-icons/io5';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot,
} from 'recharts';

let lastScrollTime = 0;

const ScrollViewPage = () => {
  const { listings } = useListingStore();
  const { setListing } = useListingStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hey! I’m here to answer any questions about this product.' },
  ]);
  const router = useRouter();
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleScroll = (e: WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime < 400) return;
    lastScrollTime = now;

    if (e.deltaY > 30 && currentIndex < listings.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < -30 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    console.log(`Scrolled to listing #${currentIndex + 1}`);
  }, [currentIndex]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: "That's a great question. Here's what I think..." }]);
    }, 500);
    setInput('');
  };

  return (
    <div className="fixed z-50 inset-0 h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="relative pt-64 w-full h-full flex items-center justify-center overflow-y-auto scrollbar-hide">
        <div className="w-full max-w-lg space-y-10 pt-200  py-10">
          {listings.map((listing, index) => {
            const chartData = Array.from({ length: 7 }, (_, i) => ({
              name: `D${i + 1}`,
              demand: Math.floor(Math.random() * 100 + 20),
            }));
            const max = chartData.reduce((a, b) => (a.demand > b.demand ? a : b));
            const min = chartData.reduce((a, b) => (a.demand < b.demand ? a : b));

            return (
              <div
              key={index}
              onClick={() => {
                setListing(listing);
                router.push('/product');
              }}
              className="w-full"
            >
              <div  className="bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                    src={listing?.images?.[0] || '/placeholder.png'}
                    alt="product"
                    layout="fill"
                    className="object-cover rounded-xl"
                    unoptimized
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-1">{listing.title}</h2>
                  <p className="text-sm text-gray-400 mb-2">{listing.details}</p>
                  <p className="text-lg font-bold text-green-400">{listing.price}</p>
                </div>

                <div className="bg-gray-900 p-4 rounded-xl">
                  <h3 className="text-cyan-400 font-semibold text-sm mb-2">📈 Demand Chart</h3>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <XAxis dataKey="name" stroke="#ccc" fontSize={10} />
                        <YAxis stroke="#ccc" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }} />
                        <Line type="monotone" dataKey="demand" stroke="#22d3ee" strokeWidth={2} dot={false} />
                        <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white" />
                        <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white flex items-center gap-2">
                    <FaPlus /> Add to Roadmap
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                    Analyze in DealMine
                  </button>
                </div>
              </div>
              </div>
            );
          
          })}
        </div>
      </div>

      <button onClick={() => setChatOpen(true)} className="fixed bottom-6 right-6 bg-cyan-500 text-white p-4 rounded-full shadow-lg z-50">
        <FaComments />
      </button>

      {chatOpen && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-70 flex flex-col">
          <div className="bg-gray-800 flex flex-col h-full">
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
};

export default ScrollViewPage;
