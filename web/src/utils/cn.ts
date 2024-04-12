/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-04-12 18:42:11
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-04-12 18:42:23
 * @FilePath: \TSC2024_web\web\src\utils\cn.ts
 * @Description: 
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
