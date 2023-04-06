import Link from 'next/Link'

export default function NavBarr () {
  return (
    <div className='w-52 flex justify-around m-5 text-xl bg-gray-800 rounded-xl'>
      <Link href='/' className='hover:text-cyan-400'>Home</Link>
      <Link href='/profile' className='hover:text-cyan-400'>Profile</Link>
    </div>
  )
}
