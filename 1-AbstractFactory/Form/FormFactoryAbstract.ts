import FormInputTextInterface from "./FormInputTextInterface";
import FormCheckboxInterface from "./FormCheckboxInterface";
import FormRadioButtonInterface from "./FormRadioButtonInterface";

export default abstract class FormFactoryAbstract {

    abstract createInputText(value: string): FormInputTextInterface;
    abstract createCheckbox(checked: boolean): FormCheckboxInterface;
    abstract createRadioButton(selected: string, options: string[]): FormRadioButtonInterface;
}