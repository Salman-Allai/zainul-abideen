import React, { useState } from 'react';

const images = [
  '/assets/gall1.jpeg',
  '/assets/gall2.jpeg',
  '/assets/gall3.jpeg',
  '/assets/gall4.jpeg',
  '/assets/gall5.jpeg',
  '/assets/gall6.jpeg',
  '/assets/gall7.jpeg',
  '/assets/gall8.jpeg',
  '/assets/gall9.jpeg',
  '/assets/gall10.jpeg',
];

const Gallery: React.FC = () => {
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white py-8 px-2 sm:px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-4 text-center">Gallery</h1>
      <p className="text-base sm:text-lg md:text-2xl text-black-700 mb-8 text-center max-w-xl">
        Take a look at our institute, events, and student activities!
      </p>
      <div className="bg-gray-50 rounded-lg shadow p-4 sm:p-6 max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-center">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-md border-2 border-purple-100 cursor-pointer"
            onClick={() => setFullscreenIdx(idx)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenIdx !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setFullscreenIdx(null)}
        >
          <img
            src={images[fullscreenIdx]}
            alt={`Gallery Fullscreen ${fullscreenIdx + 1}`}
            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-purple-700 text-3xl font-bold bg-white shadow-lg rounded-full px-3 py-1 hover:bg-gray-100 transition"
            onClick={() => setFullscreenIdx(null)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;