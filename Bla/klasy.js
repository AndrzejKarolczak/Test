class Programmer {
    constructor(name) {
        this.activity = "pije kawę";
        this.name = name;
        this.language = "dowolnym";
    }

    setName(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }

    findOutWhatThisProgrammerDoesMostOften() {
        alert(`${this.name} najczęściej ${this.activity}`);
    }

    findOutWhichLanguageThisProgrammerUses(){
        alert(`${this.name} programuje w języku ${this.language}`);
    }

    getExperienceInYears(){
        return "jeden rok";
    }
}

class JavaScriptProgrammer extends Programmer {
    constructor(name) {
        super(name);
        this.activity = "sprawdza typy danych";
        this.language = "JavaScript";
    }

    getExperienceInYears(){
        return "5 lat";
    }
}

class HtmlProgrammer extends Programmer {
    constructor(name) {
        super(name);
        this.language = "HTML";
    }

    printContentOfHtmlFile(){
        return "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "</head>\n" +
            "<body>\n" +
            "</body>\n" +
            "</html>";
    }

    getExperienceInYears(){
        return "-10 lat";
    }
}