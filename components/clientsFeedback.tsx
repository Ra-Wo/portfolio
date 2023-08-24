import { Image } from '@nextui-org/image'
import { siteConfig, type clientsFeedbackType } from '@/config/site'

export default function Clients_Feedback() {
	return (
		<section className='w-full min-h-[70vh] sm:min-h-screen flex flex-col items-center justify-center max-w-5xl'>
			<div className='w-full flex flex-col items-center justify-center text-center relative gap-9'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black'>
					Clients feedback
					<span className='text-primary'>.</span>
				</h1>
				<div className=' w-[200px] sm:w-[300px]'>
					<Image src='/images/people.svg' />
				</div>
				<div className='w-full flex gap-4 overflow-x-scroll p-1 pt-1 flex-col sm:flex-row items-center justify-center'>
					{siteConfig.clientsFeedback.map((feedback) => (
						<Feedback data={feedback} key={feedback.id} />
					))}
				</div>
			</div>
		</section>
	)
}

import { Card, CardFooter } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import clsx from 'clsx'
function Feedback({ data }: { data: clientsFeedbackType }) {
	return (
		<Card
			isFooterBlurred={false}
			shadow='none'
			radius='lg'
			className={clsx('border-none p-3 h-fit max-w-lg', 'dark:bg-foreground-100')}
		>
			<div className='px-3 border-b-1'>
				<div className='w-full flex h-7'>
					<span className='text-primary font-extrabold text-4xl'>“</span>
				</div>
				<p className='text-base text-main-ink-1 dark:text-main-ink-3'>{data.content}</p>
				<div className='w-full flex justify-end'>
					<span className='text-primary font-extrabold text-4xl'>”</span>
				</div>
			</div>
			<CardFooter className='flex justify-between'>
				<div className='flex flex-row items-center justify-center gap-2'>
					<Avatar src={data.avatar} name={data.name} />
					<div className='flex flex-col items-start justify-center gap-0'>
						<p className='text-sm text-main-ink-1 dark:text-main-ink-3 line-clamp-1'>{data.name}</p>
						<p className='text-xs text-main-ink-2 dark:text-main-ink-4'>{data.title}</p>
					</div>
				</div>
				<div className='flex flex-row items-center justify-center gap-0'>
					{new Array(data.stars).fill(0).map((_, i) => (
						<svg key={i} className='h-5 w-5 text-primary' viewBox='0 0 20 20' fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M10 0l3.09 6.38 6.9.99-5 4.86 1.18 6.88L10 15.75 3.83 19.1l1.18-6.88-5-4.86 6.9-.99z'
							/>
						</svg>
					))}
				</div>
			</CardFooter>
		</Card>
	)
}
