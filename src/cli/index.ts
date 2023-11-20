import inquirer from 'inquirer';
import { DebounceModel } from '../models/DebounceModel.js';
import { CLIDebounceController } from '../controllers/CLIDebounceController.js';

const debounceModel = new DebounceModel();
const cliDebounceController = new CLIDebounceController(debounceModel);

const questions = [
  {
    type: 'input',
    name: 'delay',
    message: 'Escribe el retardo en milisegundos:',
    validate: (value: number) =>
      !isNaN(value) || 'Introduce un número válido...',
  },
  {
    type: 'input',
    name: 'numCalls',
    message: '¿Cuántas veces quieres llamar a la función debounce?',
    validate: (value: number) =>
      !isNaN(value) || 'Introduce un número válido...',
  },
];

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const delay = answers.delay;
  const numCalls = answers.numCalls;

  cliDebounceController.setDelay(delay);

  for (let i = 0; i < numCalls; i++) {
    await cliDebounceController.debounce();
  }
};

main();
