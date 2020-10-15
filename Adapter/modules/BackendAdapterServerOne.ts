import {BackendAdapterInterface, BackendResponse} from "../types";
import BackendAdapterServer from "./BackendAdapterServer";

class Service {
    createData(): string {
        return `{
            "code": 200,
            "answer": {
                "data": {
                    "name": "TestName",
                    "age": 31
                }
            }
        }`;
    }
}

export default class BackendAdapterServerOne extends BackendAdapterServer implements BackendAdapterInterface {

    public constructor() {
        super();
        this.service = new Service();
    }

    get(): BackendResponse<any> {
        const parse = JSON.parse(this.service.createData());

        const res: BackendResponse<any> = {
            status: parse.code === 200 ? 'success' : 'error',
            data: parse.answer.data,
        };

        if (parse.code !== 200) {
            parse.answer?.error_message && (res.error_message = parse.answer?.error_message);
            parse.answer?.redirect_url && (res.redirect_url = parse.answer?.redirect_url);
        }

        return res;
    }
}