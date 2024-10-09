import React, { useState, useEffect } from 'react';

const StreamingText = ({ content = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText(""); // Reset text when content changes
    setIsComplete(false);

    const streamText = async () => {
      for (let i = 0; i <= content.length; i++) {
        await new Promise(resolve => setTimeout(resolve, speed));
        setDisplayedText(content.slice(0, i));
      }
      setIsComplete(true);
    };

    streamText();

    return () => setIsComplete(false); // Cleanup
  }, [content, speed]);

  return (
    <div className="p-4 text-lg font-mono rounded-md">
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
};

export default StreamingText;