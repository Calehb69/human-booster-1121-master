export class Film {
    public identifiant: string;
    public nom: string;
    public anneeSortie: number;
    public genres : string[];
    public realisateur: string;
    public duree: number;
    public image : URL;

    constructor(id: string, nom: string, anneeSortie: number, genres: string[], realisateur: string, duree: number, image: URL = new URL("./defaultImage.png")) {
        this.identifiant = id;
        this.nom = nom;
        this.anneeSortie = anneeSortie;
        this.genres = genres;
        this.realisateur = realisateur;
        this.duree = duree;
        this.image = image;
    }
}
