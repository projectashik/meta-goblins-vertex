import Link from "next/link"

const Footer = () => {
  return (
    <div className='bg-white border mt-16'>
      <div className='grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 space-y-2 py-8'>
        <div className='space-y-2'>
          <p className='font-bold'>MetaGoblins</p>
          <p className='max-w-sm'>
            Revolutionizing the way we manage food waste.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-4 md:space-y-0'>
          <div className='flex flex-col space-y-2'>
            <p className='font-bold'>Pages</p>
            <Link href=''>About us</Link>
            <Link href=''>Services</Link>
            <Link href=''>Contact us</Link>
          </div>
          <div className='flex flex-col space-y-2'>
            <p className='font-bold'>Contact</p>
            <a href=''>Facebook</a>
            <a href=''>Instagram</a>
            <a href=''>Twitter</a>
          </div>
        </div>
      </div>
      <div className='border'>
        <p className='py-4 container text-center'>
          All rights reserved. 2023 Food Leftoverlift Site.
        </p>
      </div>
    </div>
  )
}
export default Footer
