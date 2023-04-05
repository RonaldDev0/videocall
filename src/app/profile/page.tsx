import Image from 'next/image'

export default function Profile () {
  return (
    <div className='w-full flex flex-col items-center'>
      <Image width='200' height='200' alt='avatar' src='./defaultAvatar.svg' />
      <h1>User Name</h1>
    </div>
  )
}
