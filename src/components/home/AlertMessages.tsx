"use client";

interface AlertMessagesProps {
  messages: string[];
}

const AlertMessages = ({ messages }: AlertMessagesProps) => {
  const extendedMessages = [...messages, ...messages, ...messages, ...messages];

  return (
    <div className="bg-red-600 text-white w-full h-[67px] flex items-center overflow-hidden">
      <div className="flex  animate-marquee whitespace-nowrap">
        {extendedMessages.map((message, index) => (
          <div key={index} className="flex items-center mx-6">
            <div>{message}</div>
            <img src="/logo.svg" alt="Logo" className="size-[34px] mx-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertMessages;
