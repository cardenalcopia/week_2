"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, haircolor, eyecolor, race, isRetire, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.haircolor = haircolor;
        this.eyecolor = eyecolor;
        this.race = race;
        this.isRetire = isRetire;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.haircolor = haircolor;
        this.race = race;
        this.isRetire = isRetire;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printProfessional = function () {
        console.log(this.name + "\n" + this.age + "\n" + this.genre + "\n" + this.weight + "\n" + this.height + "\n" + this.haircolor + "\n" + this.eyecolor + "\n" + this.race + "\n" + this.isRetire + "\n" + this.nationality + "\n" + this.oscarsNumber + "\n" + this.profession + "\n");
    };
    return Professional;
}());
exports.Professional = Professional;
