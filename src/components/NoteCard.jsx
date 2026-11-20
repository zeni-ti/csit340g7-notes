import { useState, useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ title, body }) {
  const [isOpen, setIsOpen] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3
        className={`pr-8 font-normal break-words ${
          largeText ? 'text-[28px]' : 'text-[22px]'
        }`}
      >
        {title}
      </h3>
      {isOpen && (
        <p
          className={`mt-3 break-words whitespace-pre-wrap text-[#4d4d4d] ${
            largeText ? 'text-[21px]' : 'text-[17px]'
          }`}
        >
          {body}
        </p>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {isOpen ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard