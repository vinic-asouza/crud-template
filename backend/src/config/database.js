module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'crud-test',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
};
