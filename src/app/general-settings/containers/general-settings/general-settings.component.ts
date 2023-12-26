import { Component, inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {  
  private currentSettingIndex = 0;
  private settings = inject(SettingsService).getSettings();

  get currentSetting() {
    return this.settings[this.currentSettingIndex];
  }

  displaySetting(settingIndex: number) {
    this.currentSettingIndex = settingIndex;
  }
}
