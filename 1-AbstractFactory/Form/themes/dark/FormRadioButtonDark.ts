import FormRadioButtonInterface from "../../FormRadioButtonInterface";

export default class FormRadioButtonDark implements FormRadioButtonInterface {
    protected selected: string;
    protected options: string[];
    protected template: string;

    public constructor(selected: string, options: string[]) {
        this.selected = selected;
        this.options = options;

        this.template = `<div class="radio-container">${this.options.map(option =>(
            `<input type="text" name="radio" value="${option}" ${this.selected === option && 'selected'}/>`.trim()
        )).join('')}</div>`;
    }

    public onChange(value: string) {
        this.selected = value;
    }

    public getValue(): string {
        return this.selected;
    }

    public toString() {
        return `FormRadioButtonDark: ${this.template}`;
    }
}