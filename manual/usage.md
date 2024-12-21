# Usage

In this usage section you can read about pirateflix API and its functionality through the CLI.

## npm
The following commands are defined in the `package.json`:

```
 $ npm run start                        # Run pirateflix API and start the scraping process.
 $ npm run start-dev                    # Same as above, but in development mode.
 $ npm run server                       # Run pirateflix API, but do not start the scraping process.
 $ npm run server-dev                   # Same as above, but in development mode.
 $ npm run forever                      # Run pirateflix API with the 'forever' module.
 $ npm run docs                         # Generate the documentation of the API.
 $ npm run test                         # Execute the tests.
 $ npm run coverage                     # Generate coverage with Coveralls.
 $ npm run lint                         # Lint 'src' code with eslint.
```

## Gulp
The following commands are defined by Gulp:

```
 $ gulp build                           # Transpile the ES6 source code to ES5.
 $ gulp clean                           # Delete the 'build' directory.
 $ gulp default                         # The default gulp task (same as 'gulp build').
 $ gulp watch                           # Watch for any changes in the 'src' directory.
 ```

## Global
The following commands are available when pirateflix API is installed globally:

```
 $ pirateflix-api --content <type>         # Add content to the database.
 $ pirateflix-api --run                    # Run pirateflix API and start the scraping process.
 $ pirateflix-api --server                 # Run pirateflix API, but do not start the scraping process.
 $ pirateflix-api --export <collection>    # Export a collection to a JSON file.
 $ pirateflix-api --import <collection>    # Import a collection file to the database.
```
