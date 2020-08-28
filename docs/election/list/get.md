# Download a ballot

Download a list of all candidates.

**URL** : `/election/:id/ballot`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : Owner of the election

**Data constraints** : `{}`

## Success Responses

**Condition** : Ballot was created as PDF.

**Code** : `201 CREATED`

**Content** : 
```json
    PDF
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