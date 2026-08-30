import React, { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor-circle");

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-circle {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background-color: black;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999;
        }
      `}</style>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="cursor-circle" />
        ))}
      </div>
    </>
  );
}
