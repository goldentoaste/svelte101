
## Planning api scheme for later
Simple api obj scheme for a todo app. No consideraton for safty is made.
### User
Simple obj to represent user, id may be missing when creating new user. 
Password may be missing when requesting user from db.
```json
{
    id: 0, // number
    name: "defaul_name", // login & display name of user
    password: "p4ssw0rd" // password in plain text (no security!)
}
```

### Item
Obj to represent a single todo list item. Id may be missing when creating a new post, required when updating existing item with data. 
```json
{
    id: 0,
    msg: "finish workshop",
    checked: false
}
```

### Token
A token is produced when user logs in. As an uuid-4. Expires in 24hrs?