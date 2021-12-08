export class Personne {
    prenom: string;
    nom: string;
    dateNaissance: Date;
    nomComplet: string;
    majeur : boolean;
    
    constructor(prenom: string, nom: string, dateNaissance: Date) {
        this.prenom = prenom;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.nomComplet = `${prenom} ${nom}`;

        let age = this.getAge();

        if (age > 18) {
            this.majeur = true;
        } else {
            this.majeur = false;
        }
        //Syntaxe plus rapide 
        // age > 18 ? this.majeur = true : this.majeur = false;
    }
    
    getAge() {
        var today = new Date();
        var birthDate = this.dateNaissance;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
