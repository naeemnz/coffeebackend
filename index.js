require('dotenv').config()
const express = require('express')
// console.log(process.env) // remove this after you've confirmed it is working
// console.log('Hello, World!');
//or import express from 'express'; -- IGNORE -- same as above
const app = express()
const port = 4000 //jub env variables .env me define hojaye to sirf wohi port kam karenge locally, 4000 ki jagah .env me define port chalega, 4000 tab chalega jab .env me kuch define nahi hoga

const githubData = {
  "login": "kevinpowell",
  "id": 915986,
  "node_id": "MDQ6VXNlcjkxNTk4Ng==",
  "avatar_url": "https://avatars.githubusercontent.com/u/915986?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kevinpowell",
  "html_url": "https://github.com/kevinpowell",
  "followers_url": "https://api.github.com/users/kevinpowell/followers",
  "following_url": "https://api.github.com/users/kevinpowell/following{/other_user}",
  "gists_url": "https://api.github.com/users/kevinpowell/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kevinpowell/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kevinpowell/subscriptions",
  "organizations_url": "https://api.github.com/users/kevinpowell/orgs",
  "repos_url": "https://api.github.com/users/kevinpowell/repos",
  "events_url": "https://api.github.com/users/kevinpowell/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kevinpowell/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kevin Powell",
  "company": null,
  "blog": "kevinpowell.guru",
  "location": "Scappoose, OR",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 4,
  "followers": 0,
  "following": 0,
  "created_at": "2011-07-14T20:09:14Z",
  "updated_at": "2025-03-09T23:34:29Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
    res.send('n663.68')
})
//request and response: req and res
app.get('/login', (req, res) => {
    res.send('<h3>Please login at our Login Page</h3>')
    //to stop the server: ctrl + c
})

app.get('/youtube', (req, res) => {
  res.send('<h4>Welcome to YouTube</h4>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
