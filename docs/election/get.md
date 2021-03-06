# Retrive an election

Get all information of an election about its election id.

**URL** : `/election/:id/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : Election exists.

**Code** : `200 OK`

**Content** : 
```json
{
    "election": {
        "id": 0,
        "code": "245934",
        "name": "Gremienwahlen der Mozart-Schule",
        "description": "Wahlen der Schülervertretung für das Schuljahr 2019/20",
        "boards": [
            {
                "id": 0,
                "name": "Schulkonferenz",
                "description": "Die Schulkonferenz ist das oberste Schulgremium.",
                "votes": 4,
                "iAmACandidate": false
            }
        ]
    },
}
```

OR

**Condition** : User is the owner of the election.

**Code** : `200 OK`

**Content** : 
```json
{
    "election": {
        "id": 0,
        "code": "245934",
        "name": "Gremienwahlen der Mozart-Schule",
        "description": "Wahlen der Schülervertretung für das Schuljahr 2019/20",
        "voters": [
            {
                "id": 0,
                "firstname": "Max",
                "lastname": "Mustermann",
                "description": "1a"
            }
        ],
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

**Condition** : Election does not exist.

**Code** : `404 NOT FOUND`

**Content example** :

```json
{
    "error": {
        "message": "It looks like there is no election with this id.",
        "message_de": "Es sieht so aus, als ob keine Wahl mit dieser Id existiert."
    }
}
```