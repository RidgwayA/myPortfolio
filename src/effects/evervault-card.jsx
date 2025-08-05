"use client";
import React, { useEffect, useState } from "react";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import { generateRandomString } from "../utils/randomString";
import { cn } from "../lib/utils";

export const EvervaultCard = ({
  text,
  icon,
  className,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  const onMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  };

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex flex-col items-center justify-center text-white font-bold text-md">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <div className="z-20 flex flex-col items-center justify-center text-black dark:text-white">
              {icon ? (
                <>
                  <div className="text-3xl mb-1">{icon}</div>
                  <span className="text-sm font-medium">{text}</span>
                </>
              ) : (
                <span className="text-base font-semibold">{text}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardPattern = ({ mouseX, mouseY, randomString }) => {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-70" />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-secondary opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-secondary transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
};
