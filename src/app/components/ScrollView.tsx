
// src/app/components/ScrollViewPage.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useListingStore } from '../store/useListings';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, ReferenceDot,
} from 'recharts';
import { 
  FaUserCircle, 
  FaChevronLeft,  
  FaHeart, 
  FaBookmark, 
  FaShareAlt, 
  FaPlus 
} from 'react-icons/fa';
import { useDeviceType } from '../hooks/useDeviceType';

interface ScrollViewPageProps {
  setShowScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollViewPage: React.FC<ScrollViewPageProps> = ({ setShowScroll }) => {
  const { listings, setListing } = useListingStore();
  const router = useRouter();

  // const [searchTerm, setSearchTerm] = useState('');
  // const [filtered, setFiltered] = useState(listings);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // filter
  // useEffect(() => {
  //   const lower = searchTerm.toLowerCase();
  //   setFiltered(
  //     listings.filter(li =>
  //       li.title.toLowerCase().includes(lower) ||
  //       li.details.toLowerCase().includes(lower)
  //     )
  //   );
  //   setCurrentIndex(0);
  // }, [searchTerm, listings]);

  // snap
  // useEffect(() => {
  //   const el = document.getElementById(`slide-${currentIndex}`);
  //   el?.scrollIntoView({ behavior: 'smooth' });
  // }, [currentIndex]);

  // wheel nav
  // useEffect(() => {
  //   let last = 0;
  //   const onWheel = (e: WheelEvent) => {
  //     const now = Date.now();
  //     if (now - last < 300) return;
  //     last = now;
  //     if (e.deltaY > 30 && currentIndex < filtered.length - 1) {
  //       setCurrentIndex(i => i + 1);
  //     } else if (e.deltaY < -30 && currentIndex > 0) {
  //       setCurrentIndex(i => i - 1);
  //     }
  //   };
  //   window.addEventListener('wheel', onWheel, { passive: true });
  //   return () => window.removeEventListener('wheel', onWheel);
  // }, [currentIndex, filtered.length]);
 const device=useDeviceType();

 if(device=="mobile"){
    return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col   text-white z-820">
      {/* Top bar */}
      <div className="  w-1/10  flex items-center  justify-center h-16  z-900">
        <button
          onClick={() => setShowScroll(false)}
          className="absolute left-2/54 text-white text-2xl p-2  hover:bg-gray-700 rounded"
        >
          <FaChevronLeft />
        </button>
        
      </div>

      {/* Body */}
      <div className="absolute  h-full   top-0   flex flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex-1  overflow-y-auto snap-y snap-mandatory scrollbar-hide ">
          {listings.map((item, idx) => {
            const data = Array.from({ length: 7 }, (_, i) => ({
              name: `D${i + 1}`, demand: Math.floor(Math.random() * 100 + 20),
            }));
            const max = data.reduce((a, b) => (a.demand > b.demand ? a : b));
            const min = data.reduce((a, b) => (a.demand < b.demand ? a : b));

            return (
              <div
                key={idx}
                id={`slide-${idx}`}
                className=" snap-mandatory snap-start h-[calc(100vh-4rem)] w-full flex items-center justify-center bg-amber-300 overflow-hidden"
              >
                
                <div
                  role="button"
                  onClick={() => {
                    setListing(item);
                    // router.push('/product');
                  }}
                  className={`
                   w-full h-full
                    bg-center bg-cover flex flex-col-reverse justify-center item
                  `}
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                >
                <div className="fixed right-0 top-84  h-3/4   w-2/10    transform -translate-y-1/2 flex justify-end  items-end flex-col gap-10 ">
                  <div className="flex flex-col items-center gap-2 text-sm text-white">
                  <FaUserCircle className="text-4xl" />
                
                  </div>
                  {/* <a
      href={item.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-cyan-300 hover:underline"
    >
      <FaGlobe className="text-4xl" />
    </a> */}


    {/* <div className="flex items-center gap-2 text-sm text-white">
    {/* choose emoji based on value */}
    {/* <span className="text-2xl">
      🤖
    </span>  */}
  {/* </div> */}
                  <FaHeart className="text-4xl hover:text-red-500 transition" />
                  <FaBookmark className="text-4xl hover:text-yellow-500 transition" />
                  <FaShareAlt className="text-4xl hover:text-blue-500 transition" />
                  <FaPlus className="text-4xl text-cyan-400 hover:text-cyan-200 transition" />
                </div>
                  <div className="mt-auto  bg-opacity-90 p-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.details}</p>
                    <p className="mt-1 text-green-400 font-bold">{item.price}</p>
                    <div className="mt-3 h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }}
                            itemStyle={{ color: '#22d3ee' }}
                          />
                          <Line type="monotone" dataKey="demand" stroke="#22d3ee" dot={false}/>
                          <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white"/>
                          <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white"/>
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

              
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
 }
 
 
 else if(device==="tablet"){
return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col bg-gray-900 text-white z-802">
      {/* Body */}
      <div className="absolute   h-full left-1/10 w-9/10 top-0   flex justify-center  flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex-1   overflow-y-auto snap-y snap-mandatory scrollbar-hide ">
          {listings.map((item, idx) => {
            const data = Array.from({ length: 7 }, (_, i) => ({
              name: `D${i + 1}`, demand: Math.floor(Math.random() * 100 + 20),
            }));
            const max = data.reduce((a, b) => (a.demand > b.demand ? a : b));
            const min = data.reduce((a, b) => (a.demand < b.demand ? a : b));

            return (
              <div
                key={idx}
                id={`slide-${idx}`}
                className=" relative  w-5/11 left-1/5  snap-mandatory snap-start h-[calc(100vh-4rem)]  flex items-center justify-center overflow-hidden pt-4 "
              >
                
                <div
                  role="button"
                  onClick={() => {
                    setListing(item);
                    router.push('/product');
                  }}
                  className={`
                    w-8/11 max-w-xl
                    h-full rounded-xl overflow-hidden
                    bg-center bg-cover flex flex-col-reverse justify-center item
                   `}
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                >
                <div className=" absolute h-1/2 right-1/20 top-1/2   transform -translate-y-1/2 flex justify-around items-end flex-col gap-6">
                  <FaUserCircle className="text-3xl" />
                  <FaHeart className="text-3xl hover:text-red-500 transition" />
                  <FaBookmark className="text-3xl hover:text-yellow-500 transition" />
                  <FaShareAlt className="text-3xl hover:text-blue-500 transition" />
                  <FaPlus className="text-3xl text-cyan-400 hover:text-cyan-200 transition" />
                </div>
                  <div className="mt-auto  bg-opacity-90 p-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.details}</p>
                    <p className="mt-1 text-green-400 font-bold">{item.price}</p>
                    <div className="mt-3 h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }}
                            itemStyle={{ color: '#22d3ee' }}
                          />
                          <Line type="monotone" dataKey="demand" stroke="#22d3ee" dot={false}/>
                          <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white"/>
                          <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white"/>
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
 }
 
 
 else{
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col bg-gray-900 text-white z-802">
     

      {/* Body */}
      <div className="absolute   h-full left-1/10 w-9/10 top-0   flex justify-center  flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex-1   overflow-y-auto snap-y snap-mandatory scrollbar-hide ">
          {listings.map((item, idx) => {
            const data = Array.from({ length: 7 }, (_, i) => ({
              name: `D${i + 1}`, demand: Math.floor(Math.random() * 100 + 20),
            }));
            const max = data.reduce((a, b) => (a.demand > b.demand ? a : b));
            const min = data.reduce((a, b) => (a.demand < b.demand ? a : b));

            return (
              <div
                key={idx}
                id={`slide-${idx}`}
                className=" relative  w-5/11 left-1/5  snap-mandatory snap-start h-[calc(100vh-1rem)]  flex items-center justify-center overflow-hidden pt-4 "
              >
                
                <div
                  role="button"
                  onClick={() => {
                    setListing(item);
                    router.push('/product');
                  }}
                  className={`
                      
                    w-8/11 max-w-xl
                    h-full rounded-xl overflow-hidden
                    bg-center bg-cover flex flex-col-reverse justify-center item
                   `}
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                >
                <div className=" absolute h-1/2 right-1/20 top-1/2   transform -translate-y-1/2 flex justify-around items-end flex-col gap-6">
                  <FaUserCircle className="text-3xl" />
                  <FaHeart className="text-3xl hover:text-red-500 transition" />
                  <FaBookmark className="text-3xl hover:text-yellow-500 transition" />
                  <FaShareAlt className="text-3xl hover:text-blue-500 transition" />
                  <FaPlus className="text-3xl text-cyan-400 hover:text-cyan-200 transition" />
                </div>
                  <div className="mt-auto  bg-opacity-90 p-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.details}</p>
                    <p className="mt-1 text-green-400 font-bold">{item.price}</p>
                    <div className="mt-3 h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }}
                            itemStyle={{ color: '#22d3ee' }}
                          />
                          <Line type="monotone" dataKey="demand" stroke="#22d3ee" dot={false}/>
                          <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white"/>
                          <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white"/>
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

              
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )};
};

export default ScrollViewPage;


