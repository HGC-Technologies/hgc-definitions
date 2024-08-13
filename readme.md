IssueType and Category are now numbers, they can be thought of as IDs. they are defined here:
hgc-definitions/src/healthscan-db-types.ts

it's no longer necessary to update the database schema whenever you want to define a new IssueType, defining it there will be enough.

## Before pushing your change, follow these steps:

```
1: npm run build
2: increase the version in package.json by 1.
```

in instance-scanner-api, when you do npm install, it will pull the latest version if you did it correctly
