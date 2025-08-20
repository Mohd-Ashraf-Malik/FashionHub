import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi velit corporis fugiat et eaque aliquid! Officiis dignissimos et deleniti vel perferendis, natus nobis veritatis eveniet eaque amet commodi aliquam magni!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae officia quo nobis facilis ipsam libero quasi reiciendis nemo similique possimus dolore quas dolor magni deserunt, voluptate adipisci harum vitae?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iure explicabo rem, consectetur ipsam iste quod nostrum aliquam, repellendus eius cumque dignissimos sed nam, perferendis excepturi doloremque ullam quis obcaecati.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora sequi libero. Quas laboriosam officiis distinctio sit veniam inventore, porro nisi hic nemo ipsum odio, vel quos quibusdam itaque reiciendis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora sequi libero. Quas laboriosam officiis distinctio sit veniam inventore, porro nisi hic nemo ipsum odio, vel quos quibusdam itaque reiciendis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora sequi libero. Quas laboriosam officiis distinctio sit veniam inventore, porro nisi hic nemo ipsum odio, vel quos quibusdam itaque reiciendis!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
