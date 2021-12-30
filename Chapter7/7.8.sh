mongodump --db learn --out backup

mongorestore --db learn --collection unicorns backup/learn/unicorns.bson

mongoexport --db learn --collection unicorns

mongoexport --db learn --collection unicorns --csv --fields name,weight,vampires
