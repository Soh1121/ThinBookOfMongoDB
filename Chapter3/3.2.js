// 重いユニコーンの順
db.unicorns.find().sort({weight: -1})

// ユニコーンの名前とvampiresの多い順
db.unicorns.find().sort({name: 1, vampires: -1})
