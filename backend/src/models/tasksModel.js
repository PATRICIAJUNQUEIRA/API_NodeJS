const connection = require('./connection');

const getAll = async () => {
    try {
        const tasks = await connection.execute('SELECT * FROM tasks');
        return tasks;
    } catch (error) {
        console.error('Erro ao executar a consulta SQL:', error);
        throw error;
    }
};

module.exports = {
    getAll
};






