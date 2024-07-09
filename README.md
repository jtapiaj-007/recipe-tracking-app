# recipe-tracking-app
Recipe-tracking app project.

# Delicious Food Recipes
This web application allows you to keep track of recipes by providing functionality to create and delete recepies.

This is the information that can be store:
- **Name**: name of the recepie
- **Cuisine**: the type of cuisine e.g. Mexican
- **Photo**: URL of the picture of the final dish
- **Ingredients**: a list of ingredients
- **Preparation**: steps to prepare the recipe

# Troubleshooting
## npm start
If you encountered the following ERROR when executing `npm start` or `npm test`, please use the `NODE_OPTIONS` environment variable as shown below to solve the problem.

**Error Messages**:
> Error: error:0308010C:digital envelope routines::unsupported
    ...
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'


**Solution**: execute this command to export `NODE_OPTIONS` env variable.
> export NODE_OPTIONS=--openssl-legacy-provider

**Note**: this is a known problem with `Node.js v17` and above due to changes in OpenSSL.

## npm test
Depending on the React version, you may get the following WARNING i.e. does not affect the result of the tests (all of them should pass successfully).

**Warning Message(s)**
> Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
