"use client";

import { useState } from "react";
import dayjs from "../lib/dayjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Event {
  id: number;
  date: dayjs.Dayjs;
  title: string;
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      date: dayjs("2024-05-15"),
      title: "Code GST Return for review",
    },
    {
      id: 2,
      date: dayjs("2025-11-15"),
      title: "Code GST Return for review",
    },
    {
      id: 3,
      date: dayjs("2025-11-28"),
      title: "GST Return",
    },
  ]);

  const [selectedEventId, setSelectedEventId] = useState<number | null>(3);

  const handleEventClick = (eventId: number) => {
    setSelectedEventId(eventId);
    setEvents(
      events.map((event) =>
        event.id === eventId
          ? { ...event, date: event.date.add(1, "day") }
          : event
      )
    );
  };

  return (
    <div
      className={`${inter.className} max-w-2xl mx-auto rounded-3xl overflow-hidden`}
    >
      <div className="bg-[#F1F3F9] px-8 py-6">
        <h2 className="text-[28px] font-extrabold text-[#1A1A1A] tracking-tight">
          Upcoming Events
        </h2>
      </div>
      <div className="bg-white">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event.id)}
            className={`flex items-start space-x-6 px-8 py-6 cursor-pointer border-l-[6px] transition-all
              hover:bg-[#F8F9FC] group relative
              ${
                selectedEventId === event.id
                  ? "border-[#FF6B6B]"
                  : "border-[#2C3E50]"
              }
            `}
          >
            <div className="text-center min-w-[80px]">
              <div className="text-[42px] font-extrabold leading-none text-[#2C3E50]">
                {event.date.format("DD")}
              </div>
              <div className="uppercase text-sm font-semibold mt-1 text-[#2C3E50]">
                {event.date.format("MMM")}
              </div>
              {event.id == 2 && (
                <div className="text-sm font-medium text-[#6B7280] mt-0.5">
                  {event.date.format("YYYY")}
                </div>
              )}
            </div>
            <div className="transition-colors text-[22px] pt-2 font-semibold tracking-tight text-[#2C3E50] group-hover:text-[#4299E1]">
              {event.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
