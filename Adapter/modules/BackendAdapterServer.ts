export default abstract class BackendAdapterServer {
    protected readonly data: string;

    protected constructor(data: string) {
        this.data = data;
    }
}