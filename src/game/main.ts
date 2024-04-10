import { AUTO, Game } from 'phaser';
import { Battle } from './scenes/Battle';
import { Boot } from './scenes/Boot';
import { Login } from './scenes/Login';
import { Preloader } from './scenes/Preloader';
import { Title } from './scenes/Title';

const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  pixelArt: true,
  parent: 'game-container',
  backgroundColor: '#028af8',
  dom: {
    createContainer: true,
  },
  scale: {
    width: 1024,
    height: 576,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  banner: false,
  audio: {
    disableWebAudio: true,
  },
  scene: [Boot, Preloader, Title, Login, Battle],
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
