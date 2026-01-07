import {Injectable, signal} from '@angular/core';
import {ThemeEnum} from '../commons/enum-types/theme-enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageThemeKey = 'app-theme';
  $theme = signal<ThemeEnum>(ThemeEnum.dark);
  $isDarkMode = signal(false);

  constructor() {
    // this.$isDarkMode.set(localStorage.getItem('theme') === ThemeEnum.dark);
    // this.applyTheme(this.$isDarkMode() ? ThemeEnum.dark : ThemeEnum.light);
    this.applyTheme(ThemeEnum.dark);
  }



  toggleTheme(theme: ThemeEnum) {
    this.$theme.set(theme);
    localStorage.setItem(this.storageThemeKey, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: ThemeEnum) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === ThemeEnum.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }
}
