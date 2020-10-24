import FormFactoryAbstract from "./Form/FormFactoryAbstract";
import FormFactoryDark from "./Form/themes/FormFactoryDark";
import {FormFactoryDefault} from "./Form/themes/FormFactoryDefault";
import FormInputTextInterface from "./Form/FormInputTextInterface";
import FormCheckboxInterface from "./Form/FormCheckboxInterface";
import FormRadioButtonInterface from "./Form/FormRadioButtonInterface";

class Client {
    formFactory: FormFactoryAbstract;

    constructor(formTheme: string) {
        if (formTheme === 'dark') {
            this.formFactory = new FormFactoryDark();
        } else {
            this.formFactory = new FormFactoryDefault();
        }
    }
}

const client = new Client('default');

let input: FormInputTextInterface;
let checkbox: FormCheckboxInterface;
let radio: FormRadioButtonInterface;

input = client.formFactory.createInputText('Something');
checkbox = client.formFactory.createCheckbox(true);
radio = client.formFactory.createRadioButton('Boris', ['Garfild', 'Boris', 'Monika']);

// It is all Default theme instance
console.log({input: input.toString(), checkbox: checkbox.toString(), radio: radio.toString()});

const client2 = new Client('dark');

input = client.formFactory.createInputText('Something');
checkbox = client.formFactory.createCheckbox(false);
radio = client.formFactory.createRadioButton('Garfild', ['Garfild', 'Boris', 'Monika']);

// It is all Dark theme instance
console.log({input: input.toString(), checkbox: checkbox.toString(), radio: radio.toString()});