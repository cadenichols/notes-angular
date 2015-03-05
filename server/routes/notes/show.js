'use strict';

var Note = require('../../models/note');

module.exports = {
  handler: function(request, reply) {
    console.log(request.query);
    Note.find({userId:request.auth.credentials._id, _id:request.params.noteId}, function(err, note){
      if (!err) {
        reply(note[0]);
      } else {
        reply().code(400);
      }
    });
  }
};
