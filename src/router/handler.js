export const handle = (controller) => {
    return async (req, res) => {
        const { method, params, body, token } = req;
        let response;

        switch (method) {
            case 'GET':
            case 'DELETE':
                response = await controller.call(null, params, token);
                break;

            case 'POST':
                response = await controller.call(null, params, body, token);
                break;

            case 'PUT':
            default:
                response = await controller.call(null, params, body, token);
                break;
        }
        const { status, data } = response;

        if (status != 200) {
            console.log(data);
        }

        res.status(status).send(data);
    };
};
