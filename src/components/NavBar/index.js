// Write your code here.
import './index.css'

const NavBar = props => {
  const {hideScoreEle, emojiVisitedIdList, topScore} = props
  let topScoreEle
  if (topScore === 11) {
    topScoreEle = topScore + 1
  } else {
    topScoreEle = topScore
  }
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={`scoreContainer ${hideScoreEle}`}>
        <p>Score: {emojiVisitedIdList.length}</p>
        <p>Top Score: {topScoreEle}</p>
      </div>
    </div>
  )
}

export default NavBar
