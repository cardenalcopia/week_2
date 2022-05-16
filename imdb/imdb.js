"use strict";
exports.__esModule = true;
exports.Movie = exports.Professional = void 0;
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
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, actors, nationality, director, writer, language, plataform, isMCU, mainCharacterName, producer, distributor, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nationality = nationality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataform = plataform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.getActors = function () {
        return this.actors;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Movie.prototype.getNationality = function () {
        return this.nationality;
    };
    Movie.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.getWriter = function () {
        return this.writer;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.getLanguage = function () {
        return this.language;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.getPlataform = function () {
        return this.plataform;
    };
    Movie.prototype.setPlataform = function (plataform) {
        this.plataform = plataform;
    };
    Movie.prototype.isIsMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.getMainCharacterName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.getProducer = function () {
        return this.producer;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.getGenre = function () {
        return this.genre;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Movie.prototype.printMovie = function () {
        console.log(this.title + "\n" + this.releaseYear + "\n" + this.getActors() + "\n" + this.nationality + "\n" + this.getDirector() + "\n" + this.getWriter() + "\n" + this.getLanguage() + "\n" + this.getPlataform() + "\n" + this.isIsMCU() + "\n" + this.getMainCharacterName() + "\n" + this.getProducer() + "\n" + this.getDistributor() + "\n" + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
