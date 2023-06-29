const pool = require( '../database/db');

class BreedModel {
    constructor(breedName) {
        this.breedName = breedName;
    }

     save() {
        const query = {
            text: `SELECT * FROM Breed `,
            values: [this.breedName]
        }

        pool.query(query, (err, res) => {
            if (err) {
                console.log(err); 
            } else {
                console.log('Inserted successfully')
            }
        })

    }
}

module.exports = BreedModel;