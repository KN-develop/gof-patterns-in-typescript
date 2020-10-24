import {BackendAdapterInterface, BackendResponse} from "../types";
import BackendAdapterServer from "./BackendAdapterServer";

class Service {
    getUser(): string {
        return `{
        "status": "success",
        "data": {
            "name": "TestName2",
            "age": 31
        }
    }`
    }
}

export default class BackendAdapterServerTwo extends BackendAdapterServer implements BackendAdapterInterface {
    public constructor() {
        super();
        this.service = new Service();
    }

    get(): BackendResponse<any> {
        return JSON.parse(this.service.getUser());
    }
}