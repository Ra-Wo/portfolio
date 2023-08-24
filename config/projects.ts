export type ProjectType = {
	id: number
	title: string
	description: string
	image: string
	github: string | null
	demo: string | null
	keywords: string[]
}

export const projectsData = [
	{
		id: 1,
		title: 'Webserv (HTTP Server)',
		description: `A HTTP web server is a piece of software that listens for incoming HTTP requests and sends back responses. It allows users to access web content and resources through a web browser or other HTTP client.`,
		image: '/images/projects/webserv/main.bmp',
		github: 'https://github.com/Ajjig/WEB-SERVER',
		demo: null,
		keywords: ['C++', 'HTTP', 'Web Server', 'Socket']
	},
	{
		id: 2,
		title: 'Rest aurant POS System',
		description: `Developed and implemented a custom POS system for a busy restaurant to streamline operations and improve customer service. Utilized Next.js and strapi.io to build a user-friendly interface that allowed for quick and accurate order processing. Collaborated with the restaurant staff to gather requirements and design a system that met their specific needs.`,
		image: '/images/projects/pos/main.png',
		github: null,
		demo: null,
		keywords: ['Next.js', 'Strapi', 'React', 'Socket', 'Chakra']
	},
	{
		id: 3,
		title: 'Dynamic Website with Integrated Blog',
		description: `Developed a dynamic website for a local business using Next.js and Strapi. Integrated a blog to allow the business owner to post updates and announcements. Collaborated with the business owner to gather requirements and design a website that met their specific needs.`,
		image: '/images/projects/landing-page-blog/main.jpg',
		github: null,
		demo: 'https://www.kzandpartners.com/',
		keywords: ['Next.js', 'Strapi', 'React', 'Mantine', 'docker', 'nginx']
	},
	{
		id: 4,
		title: 'Online multiplayer ping-pong game.',
		description: `This project is about creating a website for the mighty Pong contest! A nice user interface, a chat, and real-time multiplayer online games!`,
		image: '/images/projects/pong/main.jpg',
		github: 'https://github.com/Iidkhebb/ft_transcendence/tree/master',
		demo: null,
		keywords: ['Nextjs', 'React', 'Socket', 'Mantine']
	}
]
