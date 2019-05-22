import proxy from 'express-http-proxy';

const gateway = (req, res) => {
    const services = [{ path: 'som', root_url: 'http://localhost:3000' }];
    const service = services.find((s) => req.originalUrl.split('/')[2] === s.path);
    if(!service) return null;
    return service.root_url;
};

const errorHandler = (err, res, next) => {
    res.status(404).send('Page not found.');
};

export const gateway_handler = () => proxy(gateway, {
    forwardPath: (req, res) => `/${req.params[0]}`,
    proxyErrorHandler: errorHandler,
});

