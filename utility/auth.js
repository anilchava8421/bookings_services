import httpStatus from 'http-status-codes'
import UserDataLayer from '../user/user.dao.js';
export default class Auth {
    static async authentication(request, response, next) {
        //Check refresh and token values in request headers
        if (request.headers.token !== undefined && request.headers.refreshtoken !== undefined) {
            let authenticate = await UserDataLayer.authenticate(request.headers.token, request.headers.refreshtoken);
            if (authenticate.auth) {
                //set headers.
                response.setHeader("token", authenticate.tokensObject.token);
                response.setHeader("refreshtoken", authenticate.tokensObject.refreshtoken);
                //Send to next middlewear
                next();
            } else {
                response.status(httpStatus.UNAUTHORIZED).send({ status: false, message: 'Unauthorized User' });
            }
        } else {
            response.status(httpStatus.UNAUTHORIZED).send({ status: false, message: 'Provide Token and RefreshToken In Request Headers.' });
        }
    }
}