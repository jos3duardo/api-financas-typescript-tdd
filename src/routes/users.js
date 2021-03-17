module.exports = () => {
    const findAll = (req, res) => {
        const users = [
            {name: 'Jhon Doe', mail: 'jhon@mail.com'},
        ];

        res.status(200).json(users)
    };

    const createUser = (req, res) => {
        res.status(201).json(req.body)
    };

    return { findAll, createUser }
}