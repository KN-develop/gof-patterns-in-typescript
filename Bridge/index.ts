interface MyWindowImp {
    devDrawLine(): void;
    devDrawText(): void;
}

class XMyWindowImp implements MyWindowImp {
    private xDrawLine(): void {
        console.log('xDrawLine');
    }
    private xDrawString(): void {
        console.log('xDrawString');
    }

    devDrawLine() {
        this.xDrawLine();
    }
    devDrawText() {
        this.xDrawString();
    }
}

class PMMyWindowImp implements MyWindowImp {
    private pmDrawPrimitiveLine(): void {
        console.log('pmDrawPrimitive');
    }
    private pmDrawParagraph(): void {
        console.log('pmDrawParagraph');
    }

    devDrawLine() {
        this.pmDrawPrimitiveLine();
    }
    devDrawText() {
        this.pmDrawParagraph();
    }
}


abstract class MyWindow {
    protected imp: MyWindowImp;

    public setImplementation(value: MyWindowImp) {
        this.imp = value;
    }

    protected drawRect() {
        this.imp.devDrawLine();
        this.imp.devDrawLine();
        this.imp.devDrawLine();
        this.imp.devDrawLine();
    };
    protected drawText() {
        this.imp.devDrawText();
    }
}

class IconMyWindow extends MyWindow {
    public drawBorder() {
        this.drawRect();
        this.drawText();
    }
}

class TransientMyWindow extends MyWindow {
    drawCloseBox() {
        this.drawRect();
    }
}

// EXAMPLES

const iconWindow: IconMyWindow = new IconMyWindow();
iconWindow.setImplementation(new XMyWindowImp());

iconWindow.drawBorder();
console.log('---------------------');

iconWindow.setImplementation(new PMMyWindowImp());
iconWindow.drawBorder();