import React from 'react';
import './Card.css';

const Card = ({ adalaberInfo }) => {

	const {
		selectedAdalaber,
		avatar_url,
		blog,
		followers,
		following,
		html_url,
		name,
		public_repos,
		location,
		sinceWhen
	} = adalaberInfo || {};

  return (
		<React.Fragment>
			{adalaberInfo ?
				<React.Fragment>
					<div class="card__wrapper">
						<div class="card__inner">
							<div class="card__photo--wrapper" style={{backgroundImage: `url('${avatar_url}')`}}>
								<img src={avatar_url} alt={name} class="card__photo" />
							</div>
							<p class="card__username">@{selectedAdalaber}</p>
							<h1 class="card__name">{name}</h1>
							<p class="card__location">
								<i class="fas fa-map-marker-alt card__location-icon"></i>
								{location || 'Algún lugar del mundo'}
							</p>
							<a class="card__link" href={html_url}>
								<i class="fab fa-github-alt card__github--icon"></i>
							</a>
							<div class="card__details--wrapper">
								<div class="card__details">
									<p class="card__details--number">{public_repos}</p>
									<p class="card__details--title">Repos</p>
								</div>
								<div class="card__details">
									<p class="card__details--number">{followers}</p>
									<p class="card__details--title">Seguidores</p>
								</div>
								<div class="card__details">
									<p class="card__details--number">{following}</p>
									<p class="card__details--title">Siguiendo</p>
								</div>
							</div>
							<p class="card__created_at">Miembro de GitHub desde hace {sinceWhen}</p>
						 </div>
					</div>
				</React.Fragment>
				:
				<i class="fab fa-github card__github--logo"></i>
			}
		</React.Fragment>

	);
}

export default Card;
