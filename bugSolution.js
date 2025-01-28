```javascript
function findDocuments(criteria) {
  const { field, values } = criteria;

  // Handle empty array case
  const query = values.length === 0 ? { field: { $exists: true } } : { field: { $in: values } };

  return db.collection.find(query).toArray();
}
```