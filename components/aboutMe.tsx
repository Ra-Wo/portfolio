import { Image } from '@nextui-org/image'
import React from 'react'

export default function AboutMe() {
	return (
		<section className='max-w-3xl py-16 sm:min-h-screen flex flex-col items-center justify-center' id='about'>
			<div className='flex flex-col items-center justify-center gap-6 max-w-4xl text-center [&>div]:py-3 relative'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black'>
					About Me<span className='text-primary'>.</span>
				</h1>
				<div className=' w-[150px] sm:w-[200px]'>
					<Image src='/images/face.svg' />
				</div>
				<img src='/images/background-programming-langs.svg' className='absolute z-[0] opacity-80 top-0' />
				<div className='[&>p]:py-1 w-full max-w-3xl'>
					<p>
						Hey there, I{"'"}m <span className='text-primary'>Rachid Oudouch</span>, a passionate web
						developer from Morocco. My journey into the world of coding has been an exhilarating ride, and I
						{"'"}m excited to offer you a glimpse of it.
					</p>
					<p>
						Armed with a versatile toolkit of skills, I thrive in languages like{' '}
						<span className='text-primary'>C</span>, <span className='text-primary'>C++</span>,{' '}
						<span className='text-primary'>JavaScript</span>, and{' '}
						<span className='text-primary'>TypeScript</span>.
					</p>
					<p>
						My educational voyage has steered me to the esteemed{' '}
						<span className='text-primary'>1337 Coding School (42 Network)</span>, where I{"'"}m devoted to
						refining my craft.
					</p>
					<p>
						I{"'"}ve been fortunate to partake in a diverse range of projects, each contributing to my
						growth and the diversification of my skill set.
					</p>
				</div>
			</div>
		</section>
	)
}
