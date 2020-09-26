<h1 align="center">GoBarber back-end</h1>
<p align="center">This repository is the back-end of GoBarber.<br />
This project was developed during <a href="https://rocketseat.com.br">Rockeset</a> <strong>GoStack</strong> bootcamp.<br>
<!--Try the <a href="https://proffy-lsg.vercel.app/">live demo</a>.<br><br>
 <a href="https://insomnia.rest/run/?label=proffy-api&uri=https%3A%2F%2Fgithub.com%2Florenasg1%2Fnlw-proffy%2Fblob%2Fmaster%2F.github%2FInsomnia_proffy.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
  </p> -->

<p align="center"><a href="#technologies">Technologies</a> | <a href="#features">Features</a> | <a href="#how-to-use">How to use</a> | <a href="#license">License</a></p>

## Technologies

- <a href="https://github.com/nodejs/node">NodeJS</a>
- <a href="https://github.com/microsoft/TypeScript">TypeScript</a>
- <a href="https://github.com/expressjs/express">Express</a>
- <a href="https://github.com/typeorm/typeorm">TypeORM</a>
- <a href="https://github.com/postgres/postgres">Postgres</a>

## Features

Find a barber and make an appointment.

### Users

- [x] Create users;

### Appointments

- [x] Create appointments;
- [x] List appointments;


## How to use

### Run API

```shell
# Clone the repositorie
$ git clone https://github.com/lorenasg1/gobarber-backend.git

# Go to the server folder
$ cd proffy/server/

# If you want a fresh start delete the database file
$ rm server/src/database.sqlite

# Install dependencies
$ yarn

# If you have deleted, recreate the database
$ yarn knex:migrate

# Start the server
$ yarn start
```

To test the api use http://localhost:3333

## License

This project is under MIT Licence.
