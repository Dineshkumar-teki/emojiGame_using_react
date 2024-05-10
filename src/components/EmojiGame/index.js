/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    initialEmojisList: this.props,
    emojiVisitedIdList: [],
    winOrLoseCondition: '',
    topScore: 0,
  }

  playAgain = () => {
    const {topScore, emojiVisitedIdList} = this.state

    if (emojiVisitedIdList.length > topScore) {
      this.setState({
        initialEmojisList: this.props,
        emojiVisitedIdList: [],
        winOrLoseCondition: '',
        topScore: emojiVisitedIdList.length,
      })
    } else {
      this.setState({
        initialEmojisList: this.props,
        emojiVisitedIdList: [],
        winOrLoseCondition: '',
      })
    }
  }

  shuffledEmojisList = id => {
    const {initialEmojisList, emojiVisitedIdList} = this.state
    const {emojisList} = initialEmojisList
    emojisList.sort(() => Math.random() - 0.5)
    this.setState({
      initialEmojisList: {emojisList: [...emojisList]},
      emojiVisitedIdList: [...emojiVisitedIdList, id],
    })
  }

  winOrLoseCardCallingFunc = condition => {
    this.setState({winOrLoseCondition: condition})
  }

  render() {
    const {
      initialEmojisList,
      emojiVisitedIdList,
      winOrLoseCondition,
      topScore,
    } = this.state
    let winorloseClassName
    let cardItems
    let hideScoreEle
    if (winOrLoseCondition === true) {
      winorloseClassName = 'displayWin'
      cardItems = 'displayEmojis'
      hideScoreEle = 'hideScore'
    } else if (winOrLoseCondition === false) {
      winorloseClassName = 'displayWin'
      cardItems = 'displayEmojis'
      hideScoreEle = 'hideScore'
    } else {
      winorloseClassName = ''
      cardItems = ''
    }
    const {emojisList} = initialEmojisList
    return (
      <div className="bgContainer">
        <NavBar
          hideScoreEle={hideScoreEle}
          emojiVisitedIdList={emojiVisitedIdList}
          topScore={topScore}
        />
        <div className="GameContainer">
          <ul className={`cardContainer ${cardItems}`}>
            {emojisList.map(eachEmoji => (
              <EmojiCard
                emojiObj={eachEmoji}
                key={eachEmoji.id}
                shuffledEmojisList={this.shuffledEmojisList}
                emojiVisitedIdList={emojiVisitedIdList}
                winOrLoseCardCallingFunc={this.winOrLoseCardCallingFunc}
              />
            ))}
          </ul>
          <div className={`winorlose ${winorloseClassName}`}>
            <WinOrLoseCard
              score={emojiVisitedIdList.length}
              condition={winOrLoseCondition}
              playAgain={this.playAgain}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
