import FormFactoryAbstract from "../FormFactoryAbstract";
import FormInputTextDefault from "./default/FormInputTextDefault";
import FormCheckboxDefault from "./default/FormCheckboxDefault";
import FormRadioButtonDefault from "./default/FormRadioButtonDefault";

export class FormFactoryDefault extends FormFactoryAbstract {
    public constructor() {
        super();
    }

    public createInputText(value: string): FormInputTextDefault {
        return new FormInputTextDefault(value);
    }

    public createCheckbox(checked:boolean): FormCheckboxDefault {
        return new FormCheckboxDefault(checked);
    }

    public createRadioButton(selected: string, options: string[]): FormRadioButtonDefault {
        return new FormRadioButtonDefault(selected, options);
    }
}