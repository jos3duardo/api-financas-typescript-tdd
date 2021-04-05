module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'docker',
            database: 'barriga',
            port: 5432
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};