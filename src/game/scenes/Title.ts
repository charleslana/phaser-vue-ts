import { BitMap } from '../enum/BitMap';
import { RouterKey } from '../enum/RouterKey';
import { Scene } from 'phaser';

export class Title extends Scene {
  constructor() {
    super(RouterKey.Title);
  }

  create() {
    this.cameras.main.setBackgroundColor('#000000');
    this.cameras.main.fadeIn(1000);
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    const titleText = this.add.bitmapText(
      centerX,
      centerY,
      BitMap.DesyrelFont,
      'One Piece RPG',
      48
    );
    titleText.setOrigin(0.5);
    this.time.delayedCall(2000, () => {
      this.scene.start(RouterKey.Preloader);
    });
  }
}
