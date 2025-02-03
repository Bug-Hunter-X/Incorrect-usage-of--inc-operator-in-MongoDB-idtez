```javascript
//Correct usage of $inc operator with upsert option
db.collection('myCollection').updateOne({"_id":1},{$inc:{count:1}}, {upsert: true});
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id": 1},{"$inc":{"count": 1},"$setOnInsert":{"count":0}});
```