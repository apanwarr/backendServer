require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "apanwarr",
    "id": 150328781,
    "node_id": "U_kgDOCPXVzQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/150328781?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/apanwarr",
    "html_url": "https://github.com/apanwarr",
    "followers_url": "https://api.github.com/users/apanwarr/followers",
    "following_url": "https://api.github.com/users/apanwarr/following{/other_user}",
    "gists_url": "https://api.github.com/users/apanwarr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/apanwarr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/apanwarr/subscriptions",
    "organizations_url": "https://api.github.com/users/apanwarr/orgs",
    "repos_url": "https://api.github.com/users/apanwarr/repos",
    "events_url": "https://api.github.com/users/apanwarr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/apanwarr/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ashish Panwar",
    "company": null,
    "blog": "",
    "location": "Dehradun",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-11-09T07:44:59Z",
    "updated_at": "2025-03-10T09:02:24Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("ashish@twitter.com")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please Login at Js Backend...</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Backend Series on YOUTUBE</h2>")
})

app.get('/github', (req, res) => {
    res.json({githubData})
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
 