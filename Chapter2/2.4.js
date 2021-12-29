db.unicorns.update({}, {$set: {vaccinated: true}});
db.unicorns.find({vaccinated: true});

db.unicorns.update({}, {$set: {vaccinated: true}}, {multi: true});
db.unicorns.find({vaccinated: true});
