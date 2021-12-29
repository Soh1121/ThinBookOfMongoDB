db.employees.insert({_id: ObjectId("4d85c7039ab0fd70a117d730"), name: 'Leto'})

db.employees.insert({_id: ObjectId("4d85c7039ab0fd70a117d731"), name: 'Duncan', manager: ObjectId("4d85c7039ab0fd70a117d730")});
db.employees.insert({_id: ObjectId("4d85c7039ab0fd70a117d732"), name: 'Moneo', manager: ObjectId("4d85c7039ab0fd70a117d730")});

db.employees.find({manager: ObjectId("4d85c7039ab0fd70a117d730")})

db.employees.insert({
	_id: ObjectId("4d85c7039ab0fd70a117d733"),
	name: 'Siona',
	manager: [
		ObjectId("4d85c7039ab0fd70a117d730"),
		ObjectId("4d85c7039ab0fd70a117d732")
	]
})

db.employees.find({manager: ObjectId("4d85c7039ab0fd70a117d730")})

db.employees.insert(
	{
		_id: ObjectId("4d85c7039ab0fd70a117d734"),
		name: 'Ghanima',
		family: {
			mother: 'Chani',
			father: 'Paul',
			brother: ObjectId("4d85c7039ab0fd70a117d730")
		}
	}
)

db.employees.find({'family.mother': 'Chani'})
