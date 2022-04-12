const bcrypt = require('bcrypt')

module.exports = {
    async encrypt(string, saltRounds = 5) {
        const hash = await bcrypt.hash(string, saltRounds);
        return hash;
    },

    async compare(password, hashedPassword) {
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordMatch) {
            console.log("Erro")
            return 
        }
    },
};