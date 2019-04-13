// Preloader
import './preloader';

// SCSS
import '../scss/main.scss';

// LIBRAIRIES
import 'jquery';
import '../loading_bar/loading-bar.css';
import '../loading_bar/loading-bar';

// INITIALISATION DE LA BARRE DE PROGRÈS
import { HeartBarSvg } from './svg';

const heartBar = new ldBar('#heartBar', {
	"type": 'fill',
	"path": HeartBarSvg,
	"stroke": 'red',
	"stroke-width": '20',
	"value": '70'
});

window.setInterval(() => heartBar.set(12), 2000)