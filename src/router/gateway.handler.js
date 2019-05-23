import proxy from 'express-http-proxy';
import { service } from '../controllers';

/**
 * function find in services collection possibles routes  
 * @async
 * @param  {string} key service filter
 * @returns {stirng} containt route to be redirect
 */
const gateway = async (key) => {
    const response = await service.getOne(`/${key}`, true);
    if(!response) return null;
    return response.root_url;
};

/**
 * function that is executed when an error occurs
 * @void
 * @param  {Error} err ocurred error message
 * @param {object} res express response object 
 */
const errorHandler = (err, res) => {
    res.status(404).send('Page not found.');
};

/**
 * gateway function
 * @param {object} req express request object 
 * @param {object} res express response object 
 * @returns {function} proxy running 
 */
export const gateway_handler = async (req, res) => {
    const key = req.originalUrl.split('/')[2];
    const uri = await gateway(key);
    return proxy(uri, {
        forwardPath: (req, res) => `/${req.params[0]}`,
        proxyErrorHandler: errorHandler,
    })(req, res);
}
