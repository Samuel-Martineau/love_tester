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
  'type': 'fill',
  'path': HeartBarSvg,
  'fill': 'data:ldbar/res,stripe(#cc4276,#b4364c)',
  'fill-background': '#681a1f',
  'value': '0',
});

$('#testLove').on('click', () => {
  let testBtn = $('#testLove');
  let name1Field = $('#name1');
  let name2Field = $('#name2');
  let text = $('.ldBar-label');
  let restartBtn = $('#restart');

  if (name1Field.val() === '' || name2Field.val() === '') return;

  testBtn.css('opacity', '0');
  text.css('opacity', '100');
  restartBtn.css('opacity', '100');
  name1Field.attr('disabled', 'true');
  name2Field.attr('disabled', 'true');

  let charName1 = name1Field.val().split('');
  let charName2 = name2Field.val().split('');
  console.log(charName1, charName2);

  let common = 0;

  for (let i = 0; i < charName1.length; i++) {
    if (charName2.includes(charName1[i])) common++;
  }

  for (let i = 0; i < charName2.length; i++) {
    if (charName1.includes(charName2[i])) common++;
  }

  let percent =
    (common / (charName1.length + charName2.length)) * 50 +
    20 +
    Math.floor(Math.random() * 31);

  heartBar.set(percent);
});
$('#restart').on('click', () => {
  let testBtn = $('#testLove');
  let name1Field = $('#name1');
  let name2Field = $('#name2');
  let text = $('.ldBar-label');
  let restartBtn = $('#restart');

  testBtn.css('opacity', '100');
  text.css('opacity', '0');
  restartBtn.css('opacity', '0');
  name1Field.removeAttr('disabled', 'false');
  name2Field.removeAttr('disabled', 'false');

  heartBar.set(0);
});
