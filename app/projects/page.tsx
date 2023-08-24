import { projectsData, type ProjectType } from '@/config/projects'
import React from 'react'
import Project from '@/components/project'

export default function Projects() {
	return (
		<section
			className='max-w-3xl sm:mt-[75px] min-h-[70vh] sm:min-h-screen flex flex-col items-center justify-center gap-10'
			id='projects'
		>
			{projectsData.reverse().map((project: ProjectType) => (
				<Project project={project} key={project.id} />
			))}
		</section>
	)
}
