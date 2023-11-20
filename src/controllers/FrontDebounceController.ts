import { DebounceModel } from '../models/DebounceModel.js';
import { DebounceView } from '../views/DebounceView.js';

/**
 * Frontend - Controller
 */
export class FrontEndDebounceController {
  private model: DebounceModel;
  private view: DebounceView;

  constructor(model: DebounceModel, view: DebounceView) {
    this.model = model;
    this.view = view;
  }

  async initialDebounce(delay: number) {
    const button = document.querySelector('#button');

    if (!button) {
      return;
    }
    const handleClick = () => {
      this.model.buttonClicked();
    };

    const myFn = (...args: unknown[]) => {
      this.view.showMessage(args, this.model.functionDebounced);
      this.view.showClicks(this.model.countButtonClicked);
      this.view.updateDOM(this.model.functionDebounced.toString());
    };

    const debouncedFunction: (...args: unknown[]) => void =
      await this.model.debounce(myFn, delay);

    button.addEventListener('click', () => {
      handleClick();
      debouncedFunction('arg1', 'arg2', '...rest');
    });
  }
}
