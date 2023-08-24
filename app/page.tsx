import HeroSection from '@/components/heroSection'
import AboutMe from '@/components/aboutMe'
import Client_Feedback from '@/components/clientsFeedback'
import ContactMe from '@/components/contactMe'

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center '>
			<HeroSection />
			<AboutMe />
			<Client_Feedback />
			<ContactMe />
		</section>
	)
}
