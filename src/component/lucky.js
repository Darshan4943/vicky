import React, { useState } from 'react'
import styles from './Lucky.module.css'

function Lucky() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState('')
  const luckyNumber = 10

  function handleChange(event) {
    setResult(event.target.value)
  }

  function handleClick() {
    setCount(count + 1)
    const parsedResult = parseInt(result)
    if (parsedResult === luckyNumber) {
      alert(
        `Congratulations, you guessed the right number in ${count + 1} attempts!`
      )
    } else if (parsedResult > luckyNumber) {
      alert('You guessed a bigger number.')
    } else {
      alert('You guessed a smaller number.')
    }
    setResult('')
  }

  return (
    <div className={styles.container}>
      <h2>Can you guess the lucky number?</h2>
      <div className={styles.main}>
        <input type="text" value={result} onChange={handleChange} />
        <button  onClick={handleClick}>
          Match Number
        </button>
      </div>
    </div>
  )
}

export default Lucky
