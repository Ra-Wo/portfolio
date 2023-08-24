import { ProjectType } from '@/config/projects'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import React from 'react'
import { ExternalIcon, GithubIcon } from './icons'
import { Link } from '@nextui-org/link'

export default function Project({ project }: { project: ProjectType }) {
	return (
		<div className='flex flex-col gap-6 items-center justify-center relative md:p-14 '>
			<Image src={project.image} alt={project.title} className=' rounded-lg' />
			<div className='flex flex-col gap-5'>
				<h1 className='text-2xl font-bold text-left text-foreground-800'>{project.title}</h1>
				<p className='text-left text-md text-foreground-700  rounded-lg'>{project.description}</p>
				<div className='text-lime-500 text-sm'>{project.keywords.join(', ')}.</div>
				<div className='flex flex-row gap-4'>
					{project.demo && (
						<Link href={project.demo ?? ''} isExternal>
							<Button
								startContent={<ExternalIcon className='text-gray-800' width={24} height={24} />}
								className='text-gray-800 px-7 bg-primary'
							>
								Demo
							</Button>
						</Link>
					)}
					{project.github && (
						<Link href={project.github ?? ''} isExternal>
							<Button
								startContent={<GithubIcon className='text-gray-800' />}
								className='text-gray-800 px-7 bg-primary'
							>
								Github
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
