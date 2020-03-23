import React, { FC, useState, useMemo, useCallback } from 'react'
import './Counter.scss'

const Counter: FC<{
  name: string
  icon?: JSX.Element
}> = ({ name, icon }) => {
  const [count, setCount] = useState<number>(0)
  const getUnit = useCallback((count: number): string => {
    if (count >= 100) return '匹'
    if (count === 0) return 'ひき'
    // when 1 <= count <= 99
    return (
      ['ぴ', 'ぴ', 'ひ', 'び', 'ひ', 'ひ', 'ぴ', 'ひ', 'ぴ', 'ひ'][count % 10] +
      'き'
    )
  }, [])

  return (
    <div>
      <button
        onClick={useCallback(_ => setCount(count + 1), [count])}
        className="counter"
      >
        <span className="icon">
          {icon ? icon : <i className="fas fa-paw"></i>}
        </span>
        <span className="text">
          {name}: {count} {getUnit(count)}
        </span>
      </button>
    </div>
  )
}

export default Counter
