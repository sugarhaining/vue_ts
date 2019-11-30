const bcrypt = require('bcryptjs');

exports.hash = async (source) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(source, salt);
    return hash;
}