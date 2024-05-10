// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {
    emojiObj,
    shuffledEmojisList,
    emojiVisitedIdList,
    winOrLoseCardCallingFunc,
  } = props
  const {id, emojiName, emojiUrl} = emojiObj

  const onclickEmoji = () => {
    if (emojiVisitedIdList.length === 11) {
      winOrLoseCardCallingFunc(true, emojiVisitedIdList.length)
    } else if (emojiVisitedIdList.includes(id)) {
      winOrLoseCardCallingFunc(false, emojiVisitedIdList.length)
    } else {
      shuffledEmojisList(id)
    }
  }

  return (
    <li onClick={onclickEmoji}>
      <button>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
