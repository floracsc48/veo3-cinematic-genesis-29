
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  shouldStart?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 100, 
  className = '',
  shouldStart = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (shouldStart && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex >= text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, shouldStart]);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayText('');
      setCurrentIndex(0);
      setIsComplete(false);
    }
  }, [shouldStart]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
