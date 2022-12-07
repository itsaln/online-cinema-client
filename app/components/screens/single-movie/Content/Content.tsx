import { FC } from 'react'

import ContentList from '@/screens/single-movie/Content/ContentList/ContentList'

import MaterialIcon from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getActorUrl, getGenreUrl } from '@/configs/url.config'

import styles from './Content.module.scss'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parameters?.year} . </span>
				<span>{movie.parameters?.country} . </span>
				<span>{movie.parameters?.duration} min.</span>
			</div>
			<ContentList
				name='Genres'
				links={movie.genres.slice(0, 3).map((genre) => ({
					_id: genre._id,
					link: getGenreUrl(genre.slug),
					title: genre.name
				}))}
			/>
			<ContentList
				name='Actors'
				links={movie.actors.slice(0, 3).map((actor) => ({
					_id: actor._id,
					link: getActorUrl(actor.slug),
					title: actor.name
				}))}
			/>

			<div className={styles.rating}>
				<MaterialIcon name='MdStarRate' />
				<span>{movie.rating.toFixed(1)}</span>
			</div>

			{/*	Favorite button */}
		</div>
	)
}

export default Content