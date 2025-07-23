'use client'

import { useRef, useEffect, useState } from 'react'

const HOURS = 24
const TIMELINE_WIDTH = 1200 // px
const MARKER_SIZE = 10

export default function Timeline({ incidents, onScrub }) {
  const containerRef = useRef(null)
  const [scrubberX, setScrubberX] = useState(0)
  const [dragging, setDragging] = useState(false)

  const handleMouseDown = () => setDragging(true)
  const handleMouseUp = () => setDragging(false)
  const handleMouseMove = (e) => {
    if (!dragging) return
    const rect = containerRef.current.getBoundingClientRect()
    let x = e.clientX - rect.left
    x = Math.max(0, Math.min(x, TIMELINE_WIDTH))
    setScrubberX(x)

    const time = new Date()
    time.setHours(Math.floor((x / TIMELINE_WIDTH) * HOURS), 0, 0, 0)
    onScrub(time)
  }

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging])

  return (
    <div ref={containerRef} className="relative h-20 w-[1000px] overflow-x-hidden bg-black border rounded">
      {/* Ruler */}
      {[...Array(HOURS)].map((_, i) => (
        <div key={i} className="absolute top-0" style={{ left: `${(i / HOURS) * 100}%` }}>
          <div className="w-px h-full bg-gray-400"></div>
          <div className="text-xs text-gray-500 absolute top-full mt-1 -translate-x-1/2">
            {String(i).padStart(2, '0')}:00
          </div>
        </div>
      ))}

      {/* Incident markers */}
      {incidents.map((incident, idx) => {
        const date = new Date(incident.tsStart)
        const x = (date.getHours() / HOURS) * TIMELINE_WIDTH
        return (
          <div
            key={idx}
            className="absolute top-1/2 -translate-y-1/2 bg-red-500 rounded-full"
            style={{
              left: `${x}px`,
              width: MARKER_SIZE,
              height: MARKER_SIZE,
            }}
            title={`${incident.type} @ ${new Date(incident.tsStart).toLocaleTimeString()}`}
          />
        )
      })}

      {/* Scrubber */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-blue-500 cursor-ew-resize"
        style={{ left: `${scrubberX}px` }}
        onMouseDown={handleMouseDown}
      />
    </div>
  )
}
