"use client";

import { useEffect, useState } from "react";
import { faDigits } from "@/lib/fa";

function targetForDay(date) {
  const seed =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const minutes = (seed * 9301 + 49297) % 360;
  const target = new Date(date);
  target.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
  return target;
}

function getTarget() {
  const now = new Date();
  let target = targetForDay(now);

  if (target <= now) {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    target = targetForDay(tomorrow);
  }

  return target;
}

function getRemaining() {
  const diff = Math.max(0, getTarget() - new Date());
  const total = Math.floor(diff / 1000);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

export default function DealCountdown() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const update = () => setTime(getRemaining());
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-2xl font-medium text-[#777]">{faDigits(time)}</span>
  );
}
