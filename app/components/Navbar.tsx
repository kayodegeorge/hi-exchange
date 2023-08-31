import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <nav className='bg-navbar left-0 top-0 z-[999] w-full'>
        <Image
          width={200}
          height={200}
          alt='Hi exchange Logo'
          src='/assets/hiexchange-logo.svg'
          className=''
        ></Image>
      </nav>
    </>
  )
}

export default Navbar
