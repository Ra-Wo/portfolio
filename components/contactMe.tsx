import { siteConfig } from '@/config/site'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import React from 'react'
import { GithubIcon, LinkdinIcon, TwitterIcon } from './icons'
import { Link } from '@nextui-org/link'

export default function ContactMe() {
	return (
		<section
			className='max-w-3xl min-h-[70vh] sm:min-h-screen flex flex-col items-center justify-center'
			id='contact-me'
		>
			<div className='flex flex-col items-center justify-center gap-6 max-w-7xl text-center relative rounded-xl bg-foreground-900 dark:bg-foreground-100 p-10 min-h-[400px] overflow-hidden'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-foreground-200 dark:text-foreground-800'>
					Get In Touch<span className='text-primary'>.</span>
				</h1>
				<img src='/images/aboutme-background.svg' className='absolute z-[0] opacity-20 top-0' />
				<div className='flex gap-4 z-10 relative'>
					<Link isExternal href={siteConfig.links.linkden} aria-label='Linkden'>
						<LinkdinIcon className='text-default-200 dark:text-foreground-800' />
					</Link>
					<Link isExternal href={siteConfig.links.twitter} aria-label='Twitter'>
						<TwitterIcon className='text-default-200 dark:text-foreground-800' />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label='Github'>
						<GithubIcon className='text-default-200 dark:text-foreground-800' />
					</Link>
				</div>

				<div className='w-full max-w-3xl flex flex-col gap-7 items-center justify-center'>
					<p className='text-foreground-200 dark:text-foreground-800'>
						I{"'"}m currently looking for new opportunities, my inbox is always open. Whether you have a
						question or just want to say hi, I{"'"}ll try my best to get back to you!
					</p>
					<a href='mailto:rashidoudouch@gmailcom'>
						<Button
							color='primary'
							className='dark:text-primary light:text-lime-900 w-40 font-bold'
							variant='bordered'
						>
							Say Hello
						</Button>
					</a>
				</div>
			</div>
		</section>
	)
}
