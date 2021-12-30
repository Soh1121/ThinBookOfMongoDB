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

db.users.insert(
	{
		name: 'leto',
		email: 'leto@dune.gov',
		addresses: [
			{
				street: "229 W. 43rd St",
				city: "New York",
				state:"NY",
				zip:"10036"
			},
			{
				street: "555 University",
				city: "Palo Alto",
				state:"CA",
				zip:"94107"
			}
		]
	}
)
