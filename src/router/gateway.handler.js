import { external_services } from '../../services.config';

const getServiceUrl = (params) => {
    let root = params.root.toUpperCase();
    let url = external_services[root] ? external_services[root] : 'http://localhost:8080/notfound';
    return url;
};

export const gateway_handler = (controller) => {
    return async (req, res) => {
        const { method, params, body } = req;
        let url = getServiceUrl(params);
        let response = await controller.call(null, body, url, method);

        const { status, data } = response;

        if (status != 200) {
            console.log(data);
        }

        res.status(status).send(data);
    };
};
