import { BitMap } from '../enum/BitMap';
import { ImageKey } from '../enum/ImageKey';
import { RouterKey } from '../enum/RouterKey';
import { Scene } from 'phaser';

export class Boot extends Scene {
  constructor() {
    super(RouterKey.Boot);
  }

  private camera: Phaser.Cameras.Scene2D.Camera;

  init() {
    this.camera = this.cameras.main;
  }

  preload() {
    this.camera.setBackgroundColor(0x000000);
    this.load.setPath('assets');
    this.load.image(ImageKey.BootBg, ImageKey.BootBg);
    this.loadBitMap();
  }

  create() {
    this.add
      .bitmapText(
        this.camera.width / 2,
        this.camera.height / 2 - 40,
        BitMap.GothicFont,
        'Charles Lana',
        38
      )
      .setOrigin(0.5);
    this.add
      .bitmapText(
        this.camera.width / 2,
        this.camera.height / 2,
        BitMap.GothicFont,
        'Apresenta',
        38
      )
      .setOrigin(0.5);
    this.time.delayedCall(2000, () => {
      this.cameras.main.fadeOut(1000);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start(RouterKey.Title);
      });
    });
  }

  private loadBitMap(): void {
    this.load.bitmapFont(BitMap.GothicFont, BitMap.GothicFont, BitMap.GothicMap);
    this.load.bitmapFont(BitMap.DesyrelFont, BitMap.DesyrelFont, BitMap.DesyrelMap);
    this.load.bitmapFont(BitMap.AtariFont, BitMap.AtariFont, BitMap.AtariMap);
    this.load.bitmapFont(BitMap.IceFont, BitMap.IceFont, BitMap.IceMap);
    this.load.bitmapFont(BitMap.HyperFont, BitMap.HyperFont, BitMap.HyperMap);
  }
}
