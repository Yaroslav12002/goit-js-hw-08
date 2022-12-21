import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const timeKey = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

startPlayerFromLastPosition();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ duration, percent, seconds }) {
  //   console.log('current place: ', seconds);
  localStorage.setItem(timeKey, seconds);
}

function startPlayerFromLastPosition() {
  const timePlay = localStorage.getItem(timeKey);

  if (timePlay) {
    // console.log(parseFloat(timePlay));
    player.setCurrentTime(parseFloat(timePlay));
  }
}
