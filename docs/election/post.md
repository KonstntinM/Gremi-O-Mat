# Create a new election

Create a new election and retrive an access code.

**URL** : `/election/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide name of Account to be created.

```json
{
    "name": "[unicode 64 chars max]"
}
```

**Data example** All fields must be sent.

```json
{
    "name": "Gremienwahlen der Mozart-Schule"
}
```

## Success Response

**Condition** : If everything is OK and a new election was created.

**Code** : `201 CREATED`

**Content example**

```json
{
    "election": {
        "id": 0,
        "name": "Gremienwahlen der Mozart-Schule",
    },
    "code": "14a9u"
}
```

## Error Responses

### Or

**Condition** : If fields are missed or invalid.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "name": [
        "This field is required."
    ]
}
```
