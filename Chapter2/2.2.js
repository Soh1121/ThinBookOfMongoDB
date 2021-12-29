db.unicorns.update({name: 'Pilot'}, {$inc: {vampires: -2}})

db.unicorns.update({name: 'Aurora'}, {$push: {loves: 'sugar'}})
