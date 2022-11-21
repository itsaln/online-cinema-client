import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Heading from '@/ui/heading/Heading'
import Slider from '@/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = ({ slides }) => {
	return (
		<Meta
			title='Watch movies online'
			description='Watch MovieApp movies and TV shows online or stream right to your browser.'
		>
			<Heading
				title='Watch movies online'
				className='text-gray-300 mb-8 text-xl'
			/>

			{slides.length && <Slider slides={slides} />}
		</Meta>
	)
}

export default Home
