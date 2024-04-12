/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-04-12 18:48:15
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-04-12 19:55:04
 * @FilePath: \TSC2024_web\web\src\components\hero_gradient.tsx
 * @Description: 
 */
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-40 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Welcome to TSC 2024
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
