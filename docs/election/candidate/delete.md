# Remove candidature

You can use this route to remove your candidature.

**URL** : `/election/:id/candidate`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Provide id of board to remove the candidature.

```json
{
    "id": "[mongodb id]"
}
```

**Data example** All fields must be sent.

```json
{
    "id": "5f1e993f93dd9c532208e999"
}
```

## Success Response

**Condition** : If everything is OK and a your was removed.

**Code** : `200 OK`

**Content example**

```json
{
    "board": {
        "id": 0,
        "name": "Schulkonferenz",
        "description": "Die Schulkonferenz ist das oberste Schulgremium.",
        "votes": 4,
        "iAmACandidate": false
    }
```

## Error Responses

### Or

**Condition** : If fields are missed or invalid.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "id": [
        "This field is required."
    ]
}
```
