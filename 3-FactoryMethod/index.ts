interface DocumentI {
    openDocument(): void;
    close(): void;
    save(): void;
    revert(): void;
}

interface Creator {
    createProduct(): DocumentI;
}

class DocumentWord implements DocumentI {
    private name: string = 'Doc'

    openDocument(): void {
        console.log('OPEN Word document: ', this.name);
    }
    close(): void {};
    save(): void {};
    revert(): void {};
}

class DocumentXml implements DocumentI {
    private type: string = 'xml'

    openDocument(): void {
        console.log(this.type);
    }
    close(): void {};
    save(): void {};
    revert(): void {};
}


class CreatorWord implements Creator {
    createProduct(): DocumentI {
        return new DocumentWord();
    }
}

class CreatorXml implements Creator {
    createProduct(): DocumentI {
        return new DocumentXml();
    }
}

let app: Creator = new CreatorWord();
app.createProduct().openDocument();

app = new CreatorXml();
app.createProduct().openDocument();