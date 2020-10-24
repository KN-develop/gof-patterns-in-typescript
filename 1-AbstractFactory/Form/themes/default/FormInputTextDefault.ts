import FormInputTextInterface from "../../FormInputTextInterface";

export default class FormInputTextDefault implements FormInputTextInterface {
    protected value: string;
    protected template: string;

    public constructor(value: string) {
        this.value = value;

        this.template = `<input type="text" value="${this.value}"/>`;
    }

    public onInput(value: string) {
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public toString() {
        return `FormInputTextDefault: ${this.template}`;
    }
}