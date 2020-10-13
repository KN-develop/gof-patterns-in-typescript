import {BackendAdapterInterface, BackendResponse} from "../types";
import BackendAdapterServer from "./BackendAdapterServer";

export default class BackendAdapterServerTwo extends BackendAdapterServer implements BackendAdapterInterface {
    public constructor(data: string) {
        super(data);
    }

    normalize(): BackendResponse<any> {
        return JSON.parse(this.data);
    }
}