import { DebounceModel } from './models/DebounceModel.js';
import { DebounceView } from './views/DebounceView.js';
import { FrontEndDebounceController } from './controllers/FrontDebounceController.js';

const debounceModel = new DebounceModel();
const debounceView = new DebounceView();
const debounceController = new FrontEndDebounceController(
  debounceModel,
  debounceView
);

debounceController.initialDebounce(500);
