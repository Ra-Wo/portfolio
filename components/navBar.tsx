'use client'

import { Navbar as NextUINavbar, NavbarContent, NavbarMenu } from '@nextui-org/navbar'
import { NavbarMenuToggle, NavbarItem, NavbarMenuItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ThemeSwitch } from '@/components/theme-switch'
import { TwitterIcon, GithubIcon, LinkdinIcon } from '@/components/icons'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export const Navbar = () => {
	const router = useRouter()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<NextUINavbar
			maxWidth='xl'
			position='static'
			className='pt-3 sm:pt-5'
			isBlurred={false}
			height='50px'
			isMenuOpen={isOpen}
		>
			<div className='rounded-full transition-all w-full py-4	'>
				<NavbarContent>
					<NavbarContent justify='start' className='hidden sm:flex'>
						{/*
						<NavbarBrand as="li" className="gap-3 max-w-fit">
							<NextLink className="flex justify-start items-center gap-1" href="/">
								<Logo />
								<p className="font-bold text-inherit">ACME</p>
							</NextLink>
						</NavbarBrand>
						*/}
						<ul className='hidden sm:flex gap-0 justify-start'>
							{siteConfig.navItems.map((item) => (
								<NavbarItem key={item.href + String(Math.random() * 5) + item.label}>
									<Button
										className='uppercase text-foreground-900 ring-lime-100'
										variant='light'
										color='primary'
										onClick={() => router.push(item.href)}
									>
										{item.label}
									</Button>
								</NavbarItem>
							))}
						</ul>
					</NavbarContent>

					<NavbarContent className='basis-1'>
						<div className='flex flex-row items-center justify-start sm:justify-end gap-2 w-full'>
							<Link isExternal href={siteConfig.links.linkden} aria-label='Linkden'>
								<LinkdinIcon className='text-default-700' />
							</Link>
							<Link isExternal href={siteConfig.links.twitter} aria-label='Twitter'>
								<TwitterIcon className='text-default-700' />
							</Link>
							<Link isExternal href={siteConfig.links.github} aria-label='Github'>
								<GithubIcon className='text-default-700' />
							</Link>
							<ThemeSwitch />
						</div>
					</NavbarContent>
					<NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
						<NavbarMenuToggle className='p-3' onClick={() => setIsOpen(!isOpen)} />
					</NavbarContent>
				</NavbarContent>
			</div>

			<NavbarMenu className='pt-8'>
				{/* {searchInput} */}
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{siteConfig.navMenuItems.map((item) => (
						<NavbarItem key={item.href + String(Math.random() * 5) + item.label}>
							<Button
								className='uppercase text-foreground-900 ring-lime-100'
								variant='light'
								color='primary'
								onClick={() => (setIsOpen(false), router.push(item.href))}
							>
								{item.label}
							</Button>
						</NavbarItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	)
}
