var knex = {
	client: 'mysql',
	
    connection: {
	    host     : 'localhost',
	    user     : 'root',
	    password : '',
	    database : 'db_ticket'
    },
    migrations: {
        tableName: 'knex_migrations'
	},
	pool: { min: 0, max: 7 }
	
};

module.exports = knex;

