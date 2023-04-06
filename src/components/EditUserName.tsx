'use client'
import { useState } from 'react'

export default function EditUserName ({ setIsEdit, setUserName }: { setIsEdit: Function, setUserName: Function }) {
  const [input, setInput] = useState<string>('')

  const handleSave = () => {
    setUserName(input)
    setIsEdit(false)
  }

  return (
    <div>
      <input type='text' className='text-black' value={input} onChange={({ target: { value } }: { target: { value: string } }) => setInput(value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setIsEdit(false)}>Cancel</button>
    </div>
  )
}
