export default interface FormInputTextInterface {
    onInput(value: string): void;
    getValue(): string;
    toString(): string;
}