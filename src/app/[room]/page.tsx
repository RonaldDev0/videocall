'use client'
import { useState } from 'react'

// Screens
import { Prepare, Meeting } from '@/screens'

export default function Room ({ params: { room } }: { params: { room: string }}) {
  const [prepare, setPrepare] = useState<boolean>(false)

  return (
    <>
      {
        prepare ? <Meeting room={room} setPrepare={setPrepare} /> : <Prepare setPrepare={setPrepare} />
      }
    </>
  )
}
