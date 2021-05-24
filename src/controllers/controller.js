const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://aoqxowvvnjnwnd:d12f71042d135381c781dfc4ae9473d1aa67b10fbed8d04114c37c9107a263bd@ec2-34-193-112-164.compute-1.amazonaws.com:5432/de8bqjjrraq4ka';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido a la industria de la musica'
    })
}

const getMusic = async (req, res) => {
    const response = await pool.query('select * from music;');
    res.status(200).json(response.rows);
};

const getArtist = async (req, res) => {
    const response = await pool.query('select * from artista;');
    res.status(200).json(response.rows);
};

const getAlbum = async (req, res) => {
    const response = await pool.query('select * from album;');
    res.status(200).json(response.rows);
};

const getSong = async (req, res) => {
    const response = await pool.query('select * from cancion;');
    res.status(200).json(response.rows);
};

const getDiscografia = async (req, res) => {
    const response = await pool.query('select * from vdiscografia;');
    res.status(200).json(response.rows);
};

module.exports = {
    welcome,
    getMusic,
    getArtist,
    getAlbum,
    getSong,
    getDiscografia
};
