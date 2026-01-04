"use client";
import { useEffect, useRef } from "react";
import { Marquee } from "../ui/marquee";

const AlertMessages = ({ messages }: { messages: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content || messages.length === 0) return;

    const contentWidth = content.offsetWidth;
    const containerWidth = container.offsetWidth;

    // Duration based on content width (approximately 100px per second)
    const duration = (contentWidth / 100) * 1000;

    content.style.animation = `marquee ${duration}ms linear infinite`;
  }, [messages]);

  return (
    <div className="relative w-full bg-red-600 h-16 flex items-center overflow-hidden">
      <Marquee pauseOnHover>
        {messages.map((message, index) => (
          <div
            key={`${index}`}
            className="flex items-center shrink-0 cursor-default"
          >
            <span className="text-white font-medium">{message.title}</span>
            <img
              src="/logo.svg"
              alt="Logo"
              className="size-8 ms-(--gap) bg-white rounded-full flex items-center justify-center shrink-0"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AlertMessages;
