import React, { useState } from "react";

const movies = [
  { id: 1, title: "Uncharted", image: "/uncharted.jpg" },
  { id: 2, title: "The 100", image: "/the100.jpg" },
  { id: 3, title: "Glass", image: "/glass.jpg" },
];

export default function Slide() {
  const totalItems = movies.length;
  const [selectedIndex, setSelectedIndex] = useState(1);

  const calculatePosition = (currentIndex) => {
    let diff = currentIndex - selectedIndex;
    
    // تنظیم diff برای حالت بینهایت
    if (diff > Math.floor(totalItems / 2)) diff -= totalItems;
    else if (diff < -Math.floor(totalItems / 2)) diff += totalItems;

    return diff * 176; // 176 = (192/2 + 16 + 128/2)
  };

  return (
    <div className="w-full flex items-center justify-center mt-10">
      <div className="relative flex items-center justify-center h-64 w-[500px] overflow-hidden">
        {movies.map((movie, index) => {
          const isSelected = index === selectedIndex;
          const translateX = calculatePosition(index);

          return (
            <div
              key={movie.id}
              className="absolute transition-all duration-500 cursor-pointer rounded-lg overflow-hidden shadow-lg"
              style={{
                transform: `translateX(${translateX}px) scale(${
                  isSelected ? 1.1 : 0.9
                })`,
                width: isSelected ? "192px" : "128px",
                height: isSelected ? "256px" : "192px",
                opacity: isSelected ? 1 : 0.7,
                
                zIndex: isSelected ? 10 : 1,
              }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 z-20 p-2 bg-black/50 rounded-full"
          onClick={() => 
            setSelectedIndex((prev) => 
              (prev - 1 + totalItems) % totalItems
            )
          }
        >
          ←
        </button>
        <button
          className="absolute right-2 z-20 p-2 bg-black/50 rounded-full"
          onClick={() => 
            setSelectedIndex((prev) => 
              (prev + 1) % totalItems
            )
          }
        >
          →
        </button>
      </div>
    </div>
  );
}