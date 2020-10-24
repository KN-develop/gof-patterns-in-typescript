import FormCheckboxInterface from "../../FormCheckboxInterface";

export default class FormCheckboxDefault implements FormCheckboxInterface {
    protected checked: boolean;
    protected template: string;

    public constructor(checked: boolean) {
        this.checked = checked;

        this.template = `<input type="checkbox" checked="${this.checked}"/>`;
    }

    onChange(value: boolean) {
        this.checked = value;
    }

    getValue(): boolean {
        return this.checked;
    }

    public toString() {
        return 'FormCheckbox: ' + this.template;
    }
}