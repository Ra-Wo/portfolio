export type SiteConfigType = typeof siteConfig

export const siteConfig = {
	name: 'Rachid Oudouch',
	description:
		'I am a web developer who is passionate about creating exceptional digital experiences. Currently, I have developed several projects using various technologies.',
	navItems: [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'About',
			href: '/#about'
		},
		{
			label: 'Projects',
			href: '/projects'
		},
		{
			label: 'Contact Me',
			href: '/#contact-me'
		}
	],
	navMenuItems: [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'About',
			href: '/#about'
		},
		{
			label: 'Projects',
			href: '/projects'
		},
		{
			label: 'Contact Me',
			href: '/#contact-me'
		}
	],
	links: {
		github: 'https://github.com/Ra-Wo',
		twitter: 'https://twitter.com/r_oudouch',
		linkden: 'https://www.linkedin.com/in/r-oudouch'
	},
	clientsFeedback: [
		{
			id: 1,
			content:
				'Highly recommend. Will use again. Excellent communication, understood all my requirements, turned my job around quickly and expertly.',
			stars: 5,
			name: 'Jacob Gundersen',
			title: 'upwork client',
			avatar: ''
		},
		{
			id: 2,
			content:
				'An outstanding experience! Communication was top-notch, captured all my needs flawlessly, and executed my project with speed and expertise.',
			stars: 5,
			name: 'Ayoub kremcht',
			title: 'real-world client',
			avatar: ''
		}
	]
}

export type clientsFeedbackType = (typeof siteConfig.clientsFeedback)[0]
