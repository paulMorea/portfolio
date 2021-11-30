import Shifumi from '../assets/Shifumi.png'
import Pendu from '../assets/jeu-pendu.gif'
import Memories from '../assets/JeuDesPaires.png'
import TDG from '../assets/TerreDeGeek.PNG'
import SWAPI from '../assets/SWAPI.jpg'
import Site from '../assets/SitePaul.png'

export const projetsList = [
	{
		title: 'Terre De Geek',
		id: '1',
		shortDescription: "Un site afin d'appréhender le HTML et le CSS.",
		link: "https://github.com/paulMorea/TerreDeGeek",
		cover:TDG
	},
	{
		title: 'Jeu des paires',
		id: '2',
		shortDescription: 'Un jeu réalisé pour se perfectionner en algorithmie et en DOM.',
		link: "https://github.com/paulMorea/JeuDesPaires",
		cover:Memories
	},
	{
		title: 'Shifumi',
		id: '3',
		shortDescription: 'Un Shifumi réalisé  lors de ma première semaine de formation.',
		link: "https://github.com/paulMorea/Shifumi",
		cover:Shifumi
	},
    {
		title: 'Jeu du Pendu',
		id: '4',
		shortDescription: 'Un jeu du Pendu réalisé  lors de ma deuxième semaine de formation.',
		link: "https://github.com/paulMorea/Pendu",
		cover:Pendu
	},
	{
		title: 'SWAPI',
		id: '5',
		shortDescription: "site ayant pour objectif la gestion d'une APi.",
		link: "https://github.com/paulMorea/star-wars",
		cover:SWAPI
	},
    {
		title: 'Mon site',
		id: '6',
		shortDescription: 'Mon premier site réalisé avant ma formation.',
		link: "https://paul-morea.com/",
		cover:Site
	}
]