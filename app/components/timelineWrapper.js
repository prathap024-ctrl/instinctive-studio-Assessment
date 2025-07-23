// components/TimelineWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Timeline from "./incidentTimeline";

export default function TimelineWrapper({ incidents }) {
  const [scrubTime, setScrubTime] = useState(new Date(2025, 6, 22, 0, 0, 0));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        setScrubTime((prev) => {
          const next = new Date(prev.getTime() + 1000 * 60);
          return next.getHours() < 24 ? next : prev;
        });
      }, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => setPlaying((p) => !p)}>
          {playing ? "Pause" : "Play"}
        </button>
        <div className="text-sm">
          {scrubTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
      <Timeline
        incidents={incidents}
        currentTime={scrubTime}
        onScrub={setScrubTime}
      />
    </div>
  );
}
