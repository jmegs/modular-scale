import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/header'

export default () => {
  const [ratio, setRatio] = useState(1.5)
  const [base, setBase] = useState(16)
  const [result, setResult] = useState({})

  useEffect(() => {
    function calc(steps) {
      let s0 = Math.round(base)
      let s1 = Math.round(s0 * ratio)
      let s2 = Math.round(s1 * ratio)
      let s3 = Math.round(s2 * ratio)
      let s4 = Math.round(s3 * ratio)

      let sa = Math.round(base / ratio)
      let sb = Math.round(sa / ratio)
      let sc = Math.round(sb / ratio)

      return { sc, sb, sa, s0, s1, s2, s3, s4 }
    }
    setResult(calc(5))
  }, [base, ratio])

  return (
    <main>
      <label htmlFor="base">Base</label>
      <input id="base" value={base} onChange={e => setBase(e.target.value)} />
      <label htmlFor="ratio">Base</label>
      <input
        id="ratio"
        value={ratio}
        onChange={e => setRatio(e.target.value)}
      />
      {JSON.stringify(result, null, 2)}
    </main>
  )
}
