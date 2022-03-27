export type Confirm = {
  confirm(msg: string): Promise<boolean>;
};

class ConfirmService implements Confirm {
  private _Mode = false;
  Message = '';
  Resolve!: (val: boolean) => void;

  get Mode() {
    return this._Mode;
  }

  confirm(msg: string) {
    this.Message = msg;
    this._Mode = true;

    return new Promise<boolean>(resolve => {
      this.Resolve = resolve;
    });
  }

  close(val: boolean) {
    this._Mode = false;
    this.Resolve(val);
  }
}

export const confirmSrv = new ConfirmService();
