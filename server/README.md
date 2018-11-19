# API Documentation

### APIs  
  
  * [Register](#register)  
  * [Login](#login)
  * [Find](#find)
  * [User](#user)


### Logics

[Authorization](#authorization)  
[Issues](#issue)


* # Register

    *Request*
    `POST /register`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    username     | string        | Required            | length 6-30, no space
    email        | string        | Required            | your email 
    password     | string        | Required            | length 8-20, must have upper, lower case and digits, no space 
    firstname    | string        | Required            | your first name
    lastname     | string        | Required            | your last name
    linkedin      | string        | Optional| If you are willing to share your linkedin
    github       | string           | Opetional | If you are willing to share you github info
    
    *Response*
```json
    {
        "user": {
            "email": "youremail@gmail.com",
            "username": "robot101011",
            "firstname": "\"your first name\",",
            "lastname": "\"your last name\",",
            "github": "PerrySong",
            "linkedin": "Pengfei Song",
        },
        "jwttoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItNDA1b3BmNTZqb2M1NGljOSIsImVtYWlsIjoieW91cmVtYWlsQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicm9ib3QxMDEwMTEiLCJwYXNzd29yZCI6IjEyY2NmZGQ1NjIxZGY4YmFiNzU0ZjgzZTZiYTUzMThiIiwiaWF0IjoxNTQxODk2MDk2LCJleHAiOjE1NDE5ODI0OTZ9.KKZFlGq3bosHh48Roeyab_3n-4XMMt7zWs3whwpAIGU"
    }
```

```json
    {
        "error": "Some error message"
    }
```

* # login

    *Request*
    `POST /login`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    username/email | string        | Required            | your email or username
    password     | string        | Required            | your password


```json
    {
        "user": {
            "email": "youremail@gmail.com",
            "username": "robot101011",
            "firstname": "\"your first name\",",
            "lastname": "\"your last name\",",
            "github": "PerrySong",
            "linkedin": "Pengfei Song",
        },
        "jwttoken": "xxx"
    }
```

```json
    {
        "error": "Error message showing that why it didn't login successfully"
    }
```

* # find

    *Request*
    `GET /find?username=perry`


```json
    {
        "username": "robot101011",
        "id": "user-405opf56joc54ic9",
        "github": "PerrySong"
    }
```

* # user

    *Request*
    `GET /user?id=user-405opf56joc54ic9`

```json
    {
        
    "repos": [
        {
            "id": 130904738,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMzA5MDQ3Mzg=",
            "name": "18SpringCS545MidTerm2Review",
            "full_name": "PerrySong/18SpringCS545MidTerm2Review",
            "private": false,
            "owner": {
                "login": "PerrySong",
                "id": 26971233,
                "node_id": "MDQ6VXNlcjI2OTcxMjMz",
                "avatar_url": "https://avatars2.githubusercontent.com/u/26971233?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/PerrySong",
                "html_url": "https://github.com/PerrySong",
                "followers_url": "https://api.github.com/users/PerrySong/followers",
                "following_url": "https://api.github.com/users/PerrySong/following{/other_user}",
                "gists_url": "https://api.github.com/users/PerrySong/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/PerrySong/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/PerrySong/subscriptions",
                "organizations_url": "https://api.github.com/users/PerrySong/orgs",
                "repos_url": "https://api.github.com/users/PerrySong/repos",
                "events_url": "https://api.github.com/users/PerrySong/events{/privacy}",
                "received_events_url": "https://api.github.com/users/PerrySong/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/PerrySong/18SpringCS545MidTerm2Review",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review",
            "forks_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/forks",
            "keys_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/teams",
            "hooks_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/hooks",
            "issue_events_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/issues/events{/number}",
            "events_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/events",
            "assignees_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/assignees{/user}",
            "branches_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/branches{/branch}",
            "tags_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/tags",
            "blobs_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/languages",
            "stargazers_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/stargazers",
            "contributors_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/contributors",
            "subscribers_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/subscribers",
            "subscription_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/subscription",
            "commits_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/contents/{+path}",
            "compare_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/merges",
            "archive_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/downloads",
            "issues_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/issues{/number}",
            "pulls_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/labels{/name}",
            "releases_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/releases{/id}",
            "deployments_url": "https://api.github.com/repos/PerrySong/18SpringCS545MidTerm2Review/deployments",
            "created_at": "2018-04-24T19:36:08Z",
            "updated_at": "2018-04-25T20:55:30Z",
            "pushed_at": "2018-04-25T20:55:29Z",
            "git_url": "git://github.com/PerrySong/18SpringCS545MidTerm2Review.git",
            "ssh_url": "git@github.com:PerrySong/18SpringCS545MidTerm2Review.git",
            "clone_url": "https://github.com/PerrySong/18SpringCS545MidTerm2Review.git",
            "svn_url": "https://github.com/PerrySong/18SpringCS545MidTerm2Review",
            "homepage": null,
            "size": 3,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "Java",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        },
        { 

        }
        ]
    }
```
---
* # Authorization

    * Every route start with baseURL/user/ will check the token sent by a client, and the server will recognize the token and know which user you are. If you update your email, username or password, the token will expire. Also, the token will expire after it was generated 24h.

* # Issues
    
    * For linkedin Auth 2.0, where to store user's token