import { BitMap } from '../enum/BitMap';
import { ImageKey } from '../enum/ImageKey';
import { RouterKey } from '../enum/RouterKey';
import { Scene } from 'phaser';

export class Preloader extends Scene {
  constructor() {
    super(RouterKey.Preloader);
  }

  private centerX: number;
  private centerY: number;

  init() {
    this.cameras.main.fadeIn(250);
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
    this.createBg();
    this.createLoadingText();
    this.createProgressBar();
  }

  preload() {
    this.load.setPath('assets');
    this.load.image(ImageKey.BattleBg1, ImageKey.BattleBg1);
    // for (let index = 0; index < 100; index++) {
    //   this.load.image(`logo_${index}`, ImageKey.BattleBg1);
    // }
  }

  create() {
    this.scene.start(RouterKey.Battle);
  }

  private createBg(): void {
    const bootBg = this.add.image(0, 0, ImageKey.BootBg).setOrigin(0);
    bootBg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
  }

  private createLoadingText(): void {
    this.add
      .bitmapText(this.centerX, this.centerY + 130, BitMap.IceFont, 'Carregando ...', 24)
      .setOrigin(0.5);
  }

  private createProgressBar(): void {
    const barWidth = 468;
    const barHeight = 32;
    const progressBarX = this.centerX;
    const progressBarY = this.centerY + barHeight / 2 + 150;
    this.add.rectangle(progressBarX, progressBarY, barWidth, barHeight).setStrokeStyle(2, 0x000000);
    const progressIndicator = this.add.rectangle(
      progressBarX - barWidth / 2 + 4,
      progressBarY,
      4,
      barHeight - 4,
      0xffffff
    );
    this.load.on(Phaser.Loader.Events.PROGRESS, (progress: number) => {
      progressIndicator.width = 4 + (barWidth - 8) * progress;
    });
  }
}
