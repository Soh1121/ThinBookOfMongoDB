db.setProfilingLevel(2);

db.unicorns.find({weight: {$gt: 600}});

db.system.profile.find();

db.setProfilingLevel(1, 1000);
