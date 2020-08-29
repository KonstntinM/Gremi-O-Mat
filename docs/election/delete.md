# Delete an election

Delete an election

**URL** : `/election/:id/`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : User is election owner

**Data** : `{}`

## Success Response

**Condition** : If the election was successfully removed.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If there was no election available to delete.

**Code** : `404 NOT FOUND`

**Content** : `{}`

### Or

**Condition** : Authorized User is not Owner of the election.

**Code** : `403 FORBIDDEN`

**Content** : `{}`