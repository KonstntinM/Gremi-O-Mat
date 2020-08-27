# Update Election

Update the election.

**URL** : `/election/:id/`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User is the election owner.

**Data constraints**

```json
{
    "name": "[unicode 64 chars max]",
    "description": "[unicode 200 chars max]",
    "boards": [
            {
                "name": "[unicode 64 chars max]",
                "description": "[unicode 150 chars max]",
                "votes": number (100 max)
            }
        ]
    }
}
```

**Data example** Partial data is allowed

```json
{
    "name": "Gremienwahlen der Mozart-Schule",
    "description": "Wahlen der Schülervertretung für das Schuljahr 2019/20",
    "boards": [
            {
                "name": "Schulkonferenz",
                "description": "Die Schulkonferenz ist das oberste Schulgremium.",
                "votes": 4
            }
        ]
    }
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the owner
of the election.

**Code** : `200 OK`

**Content example** :

```json
{
    "election": {
        "id": 0,
        "name": "Gremienwahlen der Mozart-Schule",
        "description": "Wahlen der Schülervertretung für das Schuljahr 2019/20",
        "boards": [
            {
                "id": 0,
                "name": "Schulkonferenz",
                "description": "Die Schulkonferenz ist das oberste Schulgremium.",
                "votes": 4
            }
        ]
    },
}
```

## Error Response

**Condition** : Election does not exist at URL

**Code** : `404 NOT FOUND`

**Content** : `{}`

### Or

**Condition** : User is not authorized.

**Code** : `403 FORBIDDEN`

**Content** : `{}`

### Or

**Condition** : If fields are missed or invalid.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "name": [
        "This field is invalid."
    ]
}
```