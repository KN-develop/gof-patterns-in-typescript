import {BackendAdapterInterface, BackendResponse} from "./types";
import BackendAdapterServerOne from "./modules/BackendAdapterServerOne";
import BackendAdapterServerTwo from "./modules/BackendAdapterServerTwo";


class System {
    protected activeServer: BackendAdapterInterface;

    constructor(serverName: string) {
        if (serverName === 'serverOne') {
            this.activeServer = new BackendAdapterServerOne();
        }
        if (serverName === 'serverTwo') {
            this.activeServer = new BackendAdapterServerTwo();
        }
    }

    getData<T>(): BackendResponse<T> {
        return this.activeServer.get();
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
