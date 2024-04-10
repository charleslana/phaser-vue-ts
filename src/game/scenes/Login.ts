import { RouterKey } from '../enum/RouterKey';
import { Scene } from 'phaser';

export class Login extends Scene {
  constructor() {
    super(RouterKey.Login);
  }

  private camera: Phaser.Cameras.Scene2D.Camera;

  init() {
    this.cameras.main.fadeIn(250);
    this.camera = this.cameras.main;
  }

  preload() {
    this.camera.setBackgroundColor(0xffffff);
  }

  create() {
    this.add.text(100, 100, 'Login Scene', {
      color: '#000000',
    });
  }
}
