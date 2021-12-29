db.unicorns.count({vampires: {$gt: 50}})

db.unicorns.find({vampires: {$gt: 50}}).count()
