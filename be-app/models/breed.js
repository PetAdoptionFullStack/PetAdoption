const pool = require( '../database/db');

class BreedModel {
    constructor(breedName) {
        this.breedName = breedName;
    }

     save() {
        const query = {
            text: `INSERT INTO Breed (breed_name) VALUES ($1) `,
            values: [this.breedName]
        }

        pool.query(query, (err, res) => {
            if (err) {
                console.log("Error when trying to insert", err); 
            } else {
                console.log('Inserted successfully')
            }
        });

    }

    getBreeds() {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM Breed`;
      
          pool.query(query, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res.rows);
            }
          });
        });
    }
}

module.exports = BreedModel;