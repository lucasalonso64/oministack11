const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async  index (req, res) {
         try {
        const ongs = await connection('ongs').select('*');
      
          return res.json(ongs);
        } catch (error) {
            console.log(error)
          }
      },
    

     create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

           connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return res.json(id);
    }
};