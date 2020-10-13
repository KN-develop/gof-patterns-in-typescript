import {BackendAdapterInterface, BackendResponse} from "./types";
import BackendAdapterServerOne from "./modules/BackendAdapterServerOne";
import BackendAdapterServerTwo from "./modules/BackendAdapterServerTwo";


const mock1 = `{
            "code": 200,
            "answer": {
                "data": {
                    "name": "TestName",
                    "age": 31
                }
            }
        }`;
const mock2 = `{
        "status": "success",
        "data": {
            "name": "TestName2",
            "age": 31
        }
    }`;

class System {
    protected activeServer: BackendAdapterInterface;

    constructor(serverName: string) {
        if (serverName === 'serverOne') {
            this.activeServer = new BackendAdapterServerOne(mock1);
        }
        if (serverName === 'serverTwo') {
            this.activeServer = new BackendAdapterServerTwo(mock2);
        }
    }

    getData<T>(): BackendResponse<T> {
        return this.activeServer.normalize();
    }
}

// EXAMPLES

const SYSTEM1 = new System('serverOne');
const SYSTEM2 = new System('serverTwo');

type User = {
    name: string,
    age: number,
}

const user1: BackendResponse<User> = SYSTEM1.getData<User>();
const user2: BackendResponse<User> = SYSTEM2.getData<User>();

console.log(user1);
console.log(user2);
