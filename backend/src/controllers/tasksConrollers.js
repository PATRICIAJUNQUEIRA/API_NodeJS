const getAll = (request, response) => {
    return response.status(200).json({message:'O controller está tudo certo!'});
};

module.exports = {
    getAll
};