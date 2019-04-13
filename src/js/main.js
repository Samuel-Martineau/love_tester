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
	"fill": 'data:ldbar/res,stripe(#cc4276,#b4364c)',
	"fill-background": '#681a1f',
	"value": '70'
});

window.setInterval(() => heartBar.set(12), 2000)