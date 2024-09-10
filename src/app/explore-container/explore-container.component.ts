import { Component, Input } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  constructor(
    public platform: Platform,
    public loadingCtrl: LoadingController,
  ) { }

  public async openLoadingDialog() {

    const loadingDialog = await this.loadingCtrl.create({
      message: 'Processing...',
      htmlAttributes: {
        'aria-label': 'Just Processing without anything else',
      },
    });

    await loadingDialog.present();
    await loadingDialog.present();
    await new Promise((r, j) => setTimeout(r, 8000));
    await loadingDialog.dismiss();
  }
}
