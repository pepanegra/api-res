# api-rest

# Get all teams

GET http://localhost:3001/nba

# Get team by id

GET http://localhost:3001/nba/:id

# create one team

POST http://localhost:3001/nba

```json
{
  "name": "Cali Hip Hop",
  "nickname": "Cali",
  "code": "HH",
  "city": "Hip Hop",
  "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png",
  "allStar": true,
  "nbaFranchise": true,
  "leagues": {
    "standard": {
      "conference": "East",
      "division": "Central"
    },
    "vegas": {
      "conference": "East",
      "division": "Central"
    },
    "utah": {
      "conference": "East",
      "division": "Central"
    },
    "sacramento": {
      "conference": "East",
      "division": "Central"
    }
  }
}
```

# Modify teams by id

PATCH http://localhost:3001/nba/:id

# Delete teams by id

DELETE http://localhost:3001/nba/:id
