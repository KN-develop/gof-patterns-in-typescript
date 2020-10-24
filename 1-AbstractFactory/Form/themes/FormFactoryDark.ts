import FormFactoryAbstract from "../FormFactoryAbstract";
import FormInputTextDark from "./dark/FormInputTextDark";
import FormCheckboxDark from "./dark/FormCheckboxDark";
import FormRadioButtonDark from "./dark/FormRadioButtonDark";

export default class FormFactoryDark extends FormFactoryAbstract {
    public constructor() {
        super();
    }

    public createInputText(value: string): FormInputTextDark {
        return new FormInputTextDark(value);
    }

    public createCheckbox(checked:boolean): FormCheckboxDark {
        return new FormCheckboxDark(checked);
    }

    public createRadioButton(selected: string, options: string[]): FormRadioButtonDark {
        return new FormRadioButtonDark(selected, options);
    }
}