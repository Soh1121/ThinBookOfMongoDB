db.unicorns.aggregate(
	[
		{
			$group: {
				_id: '$gender',
				total: {
					$sum: 1
				}
			}
		}
	]
)

db.unicorns.aggregate(
	[
		{
			$match: {weight: {$lt: 600}}
		},
		{
			$group: {_id: '$gender', total: {$sum: 1}, avgVamp: {$avg: '$vampires'}}
		},
		{
			$sort: {avgVamp: -1}
		}
	]
)

db.unicorns.aggregate([{$unwind: '$loves'},
		       {$group: {_id: '$loves', total: {$sum: 1}, unicorns: {$addToSet: '$name'}}},
		       {$sort: {total: -1}},
		       {$limit: 1}])
