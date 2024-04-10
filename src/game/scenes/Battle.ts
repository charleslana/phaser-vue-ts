import { ImageKey } from '../enum/ImageKey';
import { RouterKey } from '../enum/RouterKey';
import { Scene } from 'phaser';

export class Battle extends Scene {
  constructor() {
    super(RouterKey.Battle);
  }

  create() {
    this.cameras.main.setBackgroundColor('#000000');
    this.add.image(0, 0, ImageKey.BattleBg1).setOrigin(0);
  }
}
