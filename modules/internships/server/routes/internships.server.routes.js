'use strict';

/**
 * Module dependencies
 */
var internshipsPolicy = require('../policies/internships.server.policy'),
  internships = require('../controllers/internships.server.controller');

module.exports = function(app) {
  console.log('in server router');
  // Internships collection routes
  app.route('/api/internships').all(internshipsPolicy.isAllowed)
    .get(internships.list)
    .post(internships.create);

  app.param('internshipId', internships.internshipByID);
  // toutes les routes qui ont internshipID devront passer par a fonction internshiByID,
  // puis par le .all(inter), pui .get etc..

  app.route('/api/internships/:internshipId').all(internshipsPolicy.isAllowed)
    .get(internships.read)
    .delete(internships.remove)
    .put(internships.update);

  app.route('/api/internships/:internshipId/editEnterprise').all(internshipsPolicy.isAllowed)
    .put(internships.updateEnterprise);

};
