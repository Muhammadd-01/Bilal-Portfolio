"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  words: string[]
  loop?: boolean
  speed?: number
  delayBetweenWords?: number
}

export function TypingAnimation({ words, loop = false, speed = 50, delayBetweenWords = 2000 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isWaiting) {
      timer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenWords)
      return () => clearTimeout(timer)
    }

    const currentWord = words[wordIndex]
    const shouldDelete = isDeleting
    const currentLength = displayText.length

    if (!shouldDelete && currentLength < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, currentLength + 1))
      }, speed)
    } else if (shouldDelete && currentLength > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, currentLength - 1))
      }, speed / 2)
    } else if (shouldDelete && currentLength === 0) {
      if (loop) {
        setWordIndex((prev) => (prev + 1) % words.length)
      } else {
        setWordIndex((prev) => Math.min(prev + 1, words.length - 1))
      }
      setIsDeleting(false)
    } else if (!shouldDelete && currentLength === currentWord.length && wordIndex < words.length - 1) {
      setIsWaiting(true)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, wordIndex, words, speed, delayBetweenWords, isWaiting, loop])

  return (
    <span className="inline-flex">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  )
}
