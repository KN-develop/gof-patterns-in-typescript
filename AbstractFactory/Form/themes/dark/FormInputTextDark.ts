import FormInputTextInterface from "../../FormInputTextInterface";

export default class FormInputTextDark implements FormInputTextInterface {
    protected value: string;
    protected template: string;

    public constructor(value: string) {
        this.value = value;

        this.template = `<label class="input-text-dark"><input type="text" value="${this.value}"/></label>`;
    }

    public onInput(value: string) {
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public toString() {
        return `FormInputTextDark: ${this.template}`;
    }
}