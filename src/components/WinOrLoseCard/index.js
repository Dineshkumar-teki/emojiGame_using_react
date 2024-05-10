// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {condition, score, playAgain} = props

  const clickButtonFunc = () => {
    playAgain()
  }

  if (condition) {
    return (
      <div className="loseContainer">
        <div className="scoreCard">
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>{score + 1}/12</p>
          <button onClick={clickButtonFunc}>Play Again</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  } else {
    return (
      <div className="loseContainer">
        <div className="scoreCard">
          <h1>You Lose</h1>
          <p>Score</p>
          <p>{score}/12</p>
          <button onClick={clickButtonFunc}>Play Again</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }
}

export default WinOrLoseCard
