import FormCheckboxInterface from "../../FormCheckboxInterface";

export default class FormCheckboxDark implements FormCheckboxInterface {
    protected checked: boolean;
    protected template: string;

    public constructor(checked: boolean) {
        this.checked = checked;

        this.template = `<label class="checkbox-dark"><input type="checkbox" checked="${this.checked}"/></label>`;
    }

    public onChange(value: boolean) {
        this.checked = value;
    }

    public getValue(): boolean {
        return this.checked;
    }

    public toString() {
        return 'FormCheckbox: ' + this.template;
    }
}