class Welcome {
    constructor() {
        this.logoImage =
            
        this.logo = createImg(this.logoImage);
        this.logo.position(1000, 1000)

        this.teacherButton = createButton("CREATE A GAME");
        this.studentButton = createButton("JOIN A GAME");
        
    }

    hideElements() {
        this.teacherButton.hide();
        this.studentButton.hide();
    }

    setElementPosition() {
        this.logo.position(width / 18, -210);
        this.teacherButton.position(width / 2.3, height / 2 - 100);
        this.studentButton.position(width / 2.3, height / 2);
        
    }

    setElementStyle() {
        this.teacherButton.class("customButton");
        this.studentButton.class("customButton");
        
    }

    handleOnpress() {
        this.teacherButton.mousePressed(() => {
            this.hideElements();
            teacher.display();
        });

        this.studentButton.mousePressed(() => {
            this.hideElements();
            student.display();
        });

        
    }

    display() {
        this.setElementStyle();
        this.setElementPosition();
        this.handleOnpress();
    }
}