import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  async get<T>(key: string): Promise<T | null> {
    if (!this.isBrowser) return null;
    const { value } = await Preferences.get({ key });
    return value ? (JSON.parse(value) as T) : null;
  }

  async set<T>(key: string, value: T): Promise<void> {
    if (!this.isBrowser) return;
    await Preferences.set({ key, value: JSON.stringify(value) });
  }

  async remove(key: string): Promise<void> {
    if (!this.isBrowser) return;
    await Preferences.remove({ key });
  }
}
