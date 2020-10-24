export type BackendResponse<T> = {
    status: string,
    data: T,
    error_message?: string,
    redirect_url?: string,
}

export interface BackendAdapterInterface {
    get(): BackendResponse<any>;
}