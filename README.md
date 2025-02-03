# Incorrect usage of $inc operator in MongoDB
This document describes a common error encountered when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical field by a specified value.  However, improper usage can lead to unexpected errors.

## The Bug
The issue arises when attempting to increment a non-existent field with a non-numeric value. The following example demonstrates the problem:
```javascript
db.collection('myCollection').updateOne({"_id":1},{$inc:{count:"abc"}});
```
This code will throw an error because the `count` field is not a number.

## The Solution
To avoid this error, ensure the field you are incrementing either exists and is a number, or handle the case where it doesn't exist and needs to be initialized to 0.

Here's how you can fix this:
```javascript
db.collection('myCollection').updateOne({"_id":1},{$inc:{count:1}}, {upsert: true});
```
The `upsert: true` option will create a new document if one with the specified _id doesn't exist.  Alternatively, you can use `$setOnInsert` to set an initial value if the document is new:
```javascript
db.collection('myCollection').updateOne({"_id": 1},{"$inc":{"count": 1},"$setOnInsert":{"count":0}});
```