const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://lwaapokbrtzicf:23de8e908df700e628b8302c4da9684be0812e534e6320c176075957f4365f4c@ec2-18-215-111-67.compute-1.amazonaws.com:5432/d3m446295t41m7';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'JAJA tu api no sirve'
    })
}

const getArtista = async (req, res) => {
    const response = await pool.query('select * from artista');
    res.status(200).json(response.rows);
};

module.exports = {
    welcome,
    getArtista
};
