Identity Service
---
[docs](../) | [main](../../)

### OAuth2 / PassportJS Credentials

| **Authorization URL** | `https://staging-auth.wallstreetdocs.com/oauth/authorize` |
|---|---|
| **Token URL** | `https://staging-auth.wallstreetdocs.com/oauth/token` |
| **Client ID** | **coding_test** |
| **Client Secret** | bw_____6HT__________ |
| **Callback URL** | `http://localhost:3000` |


### Test User Credentials

| **User ID** | **codingtest** |
|---|---|
| **Password** | password_____ |

### Obtaining your User Profile

Make a simple GET request to ​ `https://staging-auth.wallstreetdocs.com/oauth/userinfo​` and
send your access token via the Authorization header, e.g.:

```bash
curl -X GET -H "Authorization: Bearer [YOUR_TOKEN]" -H "Cache-Control: no-cache"
"https://staging-auth.wallstreetdocs.com/oauth/userinfo"
```

