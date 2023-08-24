import React from 'react'
import Link from 'next/link'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'

export default function HeroSection() {
	return (
		<div className='flex flex-col-reverse items-center justify-center min-h-[80vh] sm:min-h-screen sm:mt-0 sm:flex-row gap-5 sm:gap-20'>
			<div className='flex flex-col items-start justify-center gap-2 flex-1'>
				<p className='text-primary text-left'>Hi, my name is</p>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black'>
					Rasheed Oudouch<span className='text-primary'>.</span>
				</h1>
				<p className={`text-lg sm:text-3xl mt-2 text-foreground-500 font-bold`}>I build things for the web.</p>
				<p className={`text-base mt-2 text-foreground-600 max-w-lg`}>
					I am a web developer who is passionate about creating exceptional digital experiences. Currently, I
					have developed several projects using various technologies.
				</p>
				<div className='flex flex-row items-center justify-start gap-2 mt-4'>
					<Link href='mailto:rashidoudouch@gmail.com'>
						<Button color='primary' className='text-gray-800 w-40'>
							Get in touch
						</Button>
					</Link>
				</div>
			</div>
			<div className='flex flex-col items-start justify-center gap-2 max-w-[200px] max-h-[300px] md:max-w-[280px] md:max-h-[480px] relative flex-1'>
				<Image src='/images/avatar.svg' className='' />
			</div>
		</div>
	)
}
