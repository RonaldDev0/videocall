'use client'

import Image from 'next/image'
import { useState } from 'react'

// Components
import { NavBarr, ShowUserName, EditUserName } from '@/components'

export default function Profile () {
  const [userName, setUserName] = useState<string>('Juan')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  return (
    <div>
      <NavBarr />
      <Image width='200' height='200' alt='avatar' src='./defaultAvatar.svg' priority />
      {
        isEdit ? <EditUserName setIsEdit={setIsEdit} setUserName={setUserName} /> : <ShowUserName setIsEdit={setIsEdit} userName={userName} />
      }
    </div>
  )
}
