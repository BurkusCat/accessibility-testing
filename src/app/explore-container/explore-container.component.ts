import { Component, Input } from '@angular/core';
import { Platform, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  constructor(
    public alertCtrl: AlertController,
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

  public async createHtmlAlert() {
    const headInjuryAlert = await this.alertCtrl.create({
        buttons: [{
            text: 'OK',
            htmlAttributes: {
                'aria-label': 'Okay',
                'aria-description': 'This dialog will now close',
            },
        }],
        message: '\'<strong>DO YOU SEE</strong>\' the way <strong>this text</strong>' +
            ' is <strong><u>read</u></strong> out <strong><u>piece by piece</u></strong>' +
            ' <strong>PREFEREABLY</strong> it should be read out' +
            ' in one long go',
        header: 'Warning',
    });

    await headInjuryAlert.present();
}
}
