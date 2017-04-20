/** @module auth-cas
 * Module for authenticating users using
 * a Central Authentication Service
 */
module.export=AuthCAS;
var express = require('express');

/** @class AuthCAS
 * Constructs a new AuthCAS object with the
 * provided settings.
 * @param {string} host - the hostname for our server
 * @param {string} casHost - the hostname for the CAS server
 */
function AuthCAS(host, casHost) {
if(!host) throw new Exception("Host must be specified");
if(!castHost) throw new Exception("CAS must be specified");
  // TODO: Create an Express SubApp
}

/** @function loginRequired
 * An express middleware function that determines if
 * a user is currently logged in.
 * If so, the middleware loads the user
 * object from the session, and triggers the
 * next() callback.  If not, it redirects to
 * the CAS server to log the user in.
 * @param {http.incomingRequest} req - the reqeust object
 * @param {http.sererResponse} res - the response object
 * @param {function} next - triggers the next requestHandler
 */
function AuthCAS.prototype.loginRequired=function(req, res, next) {
  // TODO: Check that a user is authenticated
}
