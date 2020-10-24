class App {
    private static instance: App;

    protected constructor() {}

    static create(): App {
        if (App.instance instanceof App) {
            return App.instance;
        }

        App.instance = new App();
        return App.instance;
    }
}

// usage

const appFirst = App.create();
const appSecond = App.create();

// return true
console.log(appFirst === appSecond);