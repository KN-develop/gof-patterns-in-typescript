export default interface FormCheckboxInterface {
    onChange(value: boolean): void;
    getValue(): boolean;
    toString(): string;
}