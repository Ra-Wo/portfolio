import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navBar'
import clsx from 'clsx'
import Footer from '@/components/footer'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`
	},
	description: siteConfig.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	icons: {
		icon: '/favicon.ico'
		// shortcut: "/favicon-16x16.png",
		// apple: "/apple-touch-icon.png",
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.className)}>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<img
						src='/images/aboutme-background1.svg'
						className='absolute z-[0] opacity-1 top-[-450px] left-[-450px] w-[1000px]'
					/>
					<Navbar />
					<main
						className={clsx(
							'container mx-auto px-6 flex-grow mt-6 sm:mt-[-70px] transition-all scroll-style'
						)}
					>
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}

function BlurBall({
	classes
}: {
	classes: {
		wrapper: string
		circle: string
	}
}) {
	return (
		<div className={clsx('absolute', classes.wrapper)}>
			<div className={clsx('w-full h-full rounded-full shadow-lg blur-[50px] opacity-50', classes.circle)}></div>
		</div>
	)
}
