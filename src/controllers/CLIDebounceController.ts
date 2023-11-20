import { DebounceModel } from '../models/DebounceModel.js';

/**
 * CLI - Controller
 */
export class CLIDebounceController {
  private model: DebounceModel;
  private delay: number;

  constructor(model: DebounceModel) {
    this.model = model;
    this.delay = 0;
  }

  setDelay(delay: number) {
    this.delay = delay;
  }

  async debounce() {
    let count = 0;
    const debouncedFunction = await this.model.debounce(() => {
      count++;
      this.model.buttonClicked();
      console.log(
        `Llamada numero: ${this.model.countButtonClicked}, Veces debounceada: ${count} `
      );
    }, this.delay);

    await debouncedFunction();
  }
}
