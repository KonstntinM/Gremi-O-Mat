# Authenticate for election

Authenticate with election id and user / voter code.

**URL** : `/election/:id/authenticate`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide your user / voter id.

```json
{
    "code": "[germi-o-mat code]"
}
```

**Data example**

```json
{
    "code": "3fy82"
}
```

## Success Response

**Condition** : If everything is OK and you are authenticated.

**Code** : `200 OK`

**Content example**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Responses

### Or

**Condition** : Your credentials are invalid.

**Code** : `401 UNAUTHORIZED`

**Content example**

```json
{
    "error": {
        "message": "Oops, your code was not correct. Try it again.",
        "message_de": "Ups, dein Code war leider nicht korrekt. Probiere es erneut."
    }
}
```
