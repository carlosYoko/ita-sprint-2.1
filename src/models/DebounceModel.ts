export class DebounceModel {
  functionDebounced: number = 0;
  countButtonClicked: number = 0;

  async debounce(myFn: Function, delay: number) {
    let timer: NodeJS.Timeout;
    return async (...args: unknown[]) => {
      clearTimeout(timer);
      await Promise.resolve(
        (timer = setTimeout(() => {
          this.functionDebounced++;
          myFn(args);
        }, delay))
      );
    };
  }

  buttonClicked() {
    this.countButtonClicked++;
  }
}
