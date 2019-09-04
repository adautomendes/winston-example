let devices = []; //Mocking DB

module.exports = {
    async add(req, res) {
        const { name, type } = req.body;

        let device = {
            id: devices.length,
            name,
            type
        }

        devices.push(device);

        return res.status(201).json(devices);
    },
    async search(req, res) {
        const pos = req.params.pos;

        if (pos)
            return res.status(200).json(devices[pos]);
        else
            return res.status(200).json(devices);
    },
    async clear(req, res) {
        devices = [];
        return res.status(204).json(devices);
    }
}