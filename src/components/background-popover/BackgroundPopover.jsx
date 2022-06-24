import { useSelector } from 'react-redux'
import BookCafe from './BookCafe'

const BackgroundPopover = () => {
  const background = useSelector(state => state.background.background)

  return (
    <div className="background-popover">
      {background.set === 'book_cafe' && (
        <>
          <BookCafe scene={background.scene} set={background.set} />
        </>
      )}
    </div>
  )
}

export default BackgroundPopover
