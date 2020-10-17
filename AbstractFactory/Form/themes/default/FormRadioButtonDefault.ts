import FormRadioButtonInterface from "../../FormRadioButtonInterface";

export default class FormRadioButtonDefault implements FormRadioButtonInterface {
    protected selected: string;
    protected options: string[];
    protected template: string;

    public constructor(selected: string, options: string[]) {
        this.selected = selected;
        this.options = options;

        this.template = `${this.options.map(option =>(
            `<input type="text" name="radio" value="${option}" ${this.selected === option && 'selected'}/>`.trim()
        )).join('')}`;
    }

    public onChange(value: string) {
        this.selected = value;
    }

    public getValue(): string {
        return this.selected;
    }

    public toString() {
        return `FormRadioButtonDefault: ${this.template}`;
    }
}