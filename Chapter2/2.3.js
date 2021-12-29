db.hits.update({page: 'unicorns'}, {$inc: {hits: 1}});
db.hits.find();

db.hits.update({page: 'unicorns'}, {$inc: {hits: 1}}, {upsert: true});
db.hits.find();
