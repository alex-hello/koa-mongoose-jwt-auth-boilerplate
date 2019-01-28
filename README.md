# Koa, Mongoose, JWT Auth Example fork from <a href="https://github.com/jeffijoe/koa-es7-boilerplate">Koa Boilerplate</a>

<a href="https://communityinviter.com/apps/koa-js/koajs" rel="KoaJs Slack Community">![KoaJs Slack](https://img.shields.io/badge/Koa.Js-Slack%20Channel-Slack.svg?longCache=true&style=for-the-badge)</a>



This is one of many build of Koa + Mongoose + Passport.js + ES7. Thx a 
lot to [@Jeffijoe] and his Koa Boilerplate

## Quick start 
```bash
# Clone repository.
git clone git@github.com:ZabedovskiyA/koa-mongoose-jwt-auth-boilerplate.git new-project

# Go to project folder.
cd new-project

# Install dependencies
npm i 
# Run in development mode 

npm run dev
```

Server will starts at http://localhost:5000/

## Settings
<ol>
<li> In `src/config` create file <code>config.js</code></li>
<li> Add your database name in <code>dbName</code></li>
<li> Database user in <code>dbUser</code></li>
<li> Database password in <code>dbPass</code></li>
<li> Database host in <code>dbHost</code></li>
<li> Database port in <code>dbPort</code></li>
</ol>


## `npm run` scripts

There are a few defined run scripts, here's a list of them with a description of what they do. To run them, simply execute `npm run <script name>` - e.g. `npm run dev`

- `start`: Used by the production environment to start the app. This will run a compiled version, so you need to execute `build` first.
- `build`: Runs the `babel` CLI to compile the app. Files are emitted to `dist/`.
- `dev`: Runs the app in development mode - uses `babel-node` to compile on-the-fly. Also uses `nodemon` to automatically restart when stuff changes.
- `test`: Runs tests.
- `cover`: Runs tests and collects coverage.
- `lint`: Lints + formats the code.

**Tip**: to pass additional arguments to the actual CLI's being called, do it like in this example:

**For npm:**

```bash
# Note the `--` before the actual arguments.
npm run test -- --debug
```

**For yarn:**

```bash
# Yarn does not need the `--` before the actual arguments.
yarn test --debug
```

## `docker-compose up` scripts

**For running dev:**

```bash
# Note: use --build only when you want to build. Usually when you change packages.json
docker-compose up --build
```


# Tasks

Add socket.io support

Add migrations

Add logging
# License

MIT.

[api-helper]: /src/__tests__/api-helper.js
[close-event]: /src/lib/server.js#L58
[standard]: http://standardjs.com/
[koa-router]: https://github.com/alexmingoia/koa-router
[babel]: https://github.com/babel/babel
[jest]: https://github.com/facebook/jest
[koa-bodyparser]: https://github.com/koajs/bodyparser
[eslint]: https://github.com/eslint/eslint
[prettier]: https://github.com/prettier/prettier
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[cors]: https://github.com/koajs/cors
[nodemon]: https://github.com/remy/nodemon
[respond]: https://github.com/jeffijoe/koa-respond
[yenv]: https://github.com/jeffijoe/yenv
[awilix]: https://github.com/jeffijoe/awilix
[awilix-koa]: https://github.com/jeffijoe/awilix-koa
[smid]: https://github.com/jeffijoe/smid
[fejl]: https://github.com/jeffijoe/fejl
