db.unicorns.ensureIndex({name: 1});

db.unicorns.dropIndex({name: 1});

db.unicorns.ensureIndex({name: 1}, {unique: true});

db.unicorns.ensureIndex({name: 1, vampires: -1});
