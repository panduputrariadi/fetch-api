"use client"
import { statistics } from "@/constant/constant";
import React, { useEffect, useState } from "react";

const StatisticCard = () => {
  const [animatedStats, setAnimatedStats] = useState(
    statistics.map(() => 0)
  );

  useEffect(() => {
    const intervals = statistics.map((stat, index) => {
      const increment = Math.ceil(stat.number / 100);
      return setInterval(() => {
        setAnimatedStats((prev) => {
          const newValue = [...prev];
          if (newValue[index] < stat.number) {
            newValue[index] += increment;
          } else {
            clearInterval(intervals[index]);
            newValue[index] = stat.number;
          }
          return newValue;
        });
      }, 20);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
          {statistics.map((stat, index) => (
            <div
              key={stat.title}
              className="mx-auto flex max-w-xs flex-col gap-y-4 w-full border-r border-x-gray-200 border-b border-y-gray-200"
            >
              <dt className="text-base leading-7 text-gray-600">
                {stat.title}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {animatedStats[index]}+
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StatisticCard;
