"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Tag } from "lucide-react";

export default function Offers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-[90%] mx-auto my-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       
        <div
          className={`
            min-h-[230px]
            rounded-2xl
            p-7
            text-white
            bg-gradient-to-r from-green-600 to-emerald-500
            shadow-md
            transition-all
            duration-1000
            ease-out
            ${
              showAnimation
                ? "translate-x-0 opacity-100"
                : "-translate-x-[120%] opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={14} />
              Deal of the Day
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-2">
            Fresh Organic Fruits
          </h2>

          <p className="text-white/90 mb-4">
            Get up to 40% off on selected organic fruits
          </p>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl font-bold">
              40% OFF
            </span>

            <span className="text-sm">
              Use code: <b>ORGANIC40</b>
            </span>
          </div>

          <button className="bg-white text-green-700 px-5 py-2.5 rounded-full flex items-center gap-2 font-medium hover:bg-gray-100 transition cursor-pointer">
            Shop Now
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Red Card */}
        <div
          className={`
            min-h-[230px]
            rounded-2xl
            p-7
            text-white
            bg-gradient-to-r from-orange-500 to-red-500
            shadow-md
            transition-all
            duration-1000
            ease-out
            ${
              showAnimation
                ? "translate-x-0 opacity-100"
                : "translate-x-[120%] opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles size={14} />
              New Arrivals
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-2">
            Exotic Vegetables
          </h2>

          <p className="text-white/90 mb-4">
            Discover our latest collection of premium vegetables
          </p>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl font-bold">
              25% OFF
            </span>

            <span className="text-sm">
              Use code: <b>FRESH25</b>
            </span>
          </div>

          <button className="bg-white text-red-500 px-5 py-2.5 rounded-full flex items-center gap-2 font-medium hover:bg-gray-100 transition cursor-pointer">
            Explore Now
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}