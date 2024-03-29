import Image from 'next/image'
import headshot from '../public/images/headshots/me.jpg'

function Avatar() {
  return (
    <Image
      className='rounded-full cursor-pointer'
      loading='eager'
      width={40}
      height={40}
      src={headshot}
      alt='profile pic'
    />
  )
}

export default Avatar
