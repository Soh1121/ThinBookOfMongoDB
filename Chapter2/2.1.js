db.unicorns.update({name: 'Roooooodles'}, {weight: 590})

db.unicorns.find({name: 'Roooooodles'})

db.unicorns.update({weight: 590}, {$set: {name: 'Roooooodles',
					  dob: new Date(1979, 7, 18, 18, 44),
					  loves: ['apple'],
					  gender: 'm',
					  vampires: 99}})
