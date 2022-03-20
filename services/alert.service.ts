import { sleep } from '~/utils';

export type Alert = {
  show(msg: string, type?: 'error' | 'success' | 'warning', closeable?: boolean, timer?: number): Promise<void>;
};

class AlertService implements Alert {
  private _mode = false;
  message = '';
  type: 'error' | 'success' | 'warning' = 'success';
  closeable = true;
  timer = 6;
  timerValue = 100;

  get mode() {
    return this._mode;
  }

  set mode(mode: boolean) {
    this._mode = mode;
    clearInterval(this._timerFunc);
  }

  private _timerFunc!: ReturnType<typeof setInterval>;

  async show(msg: string, type: 'error' | 'success' | 'warning' = 'success', closeable = true, timer = 6) {
    this.type = type;
    this.mode = true;
    this.message = msg;
    this.closeable = closeable;
    this.timer = timer;
    this.timerValue = 100;

    await sleep(200);

    this._timerFunc = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue -= 1;
      } else {
        this.mode = false;
      }
    }, 10 * this.timer);
  }
}

export const alertSrv = new AlertService();
