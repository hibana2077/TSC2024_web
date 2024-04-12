/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-04-12 21:01:33
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-04-12 21:37:43
 * @FilePath: \TSC2024_web\web\src\components\AnimatedTooltip.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "kazma",
    designation: "成大資安社 社長",
    image:
      "https://cdn.discordapp.com/avatars/870280109360316457/89709af8337cbb3b541c17eefc257039.webp?size=128",
  },
  {
    id: 2,
    name: "Ching367436",
    designation: "BamboFox 社長",
    image:
      "https://cdn.discordapp.com/avatars/721690348086362232/299b6e9348d9732736396872656cf056.webp?size=128",
  },
  {
    id: 3,
    name: "ItisCaleb",
    designation: "海大 IND 社長",
    image:
      "https://cdn.discordapp.com/avatars/409635353893404685/e977ca0256012698e0f8e0f4112e3021.webp?size=128",
  },
  {
    id: 4,
    name: "frostbean",
    designation: "NCtfU 讀書會 社長",
    image:
      "https://cdn.discordapp.com/avatars/786957949700145212/3ea55adc2d7cdcc57d2358e4800d2d57.webp?size=128",
  },
  {
    id: 5,
    name: "恒",
    designation: "中山資安社 社長",
    image:
      "https://cdn.discordapp.com/avatars/591964810757931018/7b6a2a0403eaa0987eee80799ea7fef5.webp?size=128",
  },
  {
    id: 6,
    name: "Rade",
    designation: "東大資安社 社長",
    image:
      "https://cdn.discordapp.com/avatars/841707190690775063/a_d83e79e90598fd730498ef7f3a68f853.webp?size=128",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <h1 className="text-4xl font-bold text-center">Hosts</h1>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    </>
  );
}
