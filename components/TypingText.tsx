'use client'

import { useState, useEffect } from 'react'

export default function TypingText() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = [
    "Software Enginner.", "Mechanical Enginner.", "Telegram dev.",
    "Game dev.", "Web dev (kind of).",
    "Full stack dev.", "Cat lover.", "Enviroment Activist."];

  useEffect(() => {
    const currentText = texts[textIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, textIndex, texts])

  return (
    <p className="typing-text typing mt-10 text-3xl">
      {displayText}
    </p>
  )
}