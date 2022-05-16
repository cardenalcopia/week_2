"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var actor1 = new imdb_1.Professional("Brad Pitt", 55, "Man", 80, 1.80, "blonde", "blue", "fight club", false, "USA", 2, "Actor");
var actor2 = new imdb_1.Professional("Maribel Verdu", 57, "Woman", 65, 1.70, "black", "brown", "La celestina", false, "Spain", 0, "Actor");
var director1 = new imdb_1.Professional("Stanley Kubrick", 80, "Man", 90, 1.85, "Black", "black", "Clockwork orange", true, "USA", 3, "director");
actor1.printProfessional();
actor2.printProfessional();
director1.printProfessional();
