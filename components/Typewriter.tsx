'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className = '' }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-primary-400 font-semibold">{displayText}</span>
      <span className="inline-flex items-center justify-center w-6 h-8 bg-primary-500 rounded animate-pulse">
        <ChevronRight className="w-4 h-4 text-white" />
      </span>
    </div>
  );
}
