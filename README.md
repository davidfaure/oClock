
# O'Clock Technical test

Create the memory game.

# Demo

You can test the game at [Memory Game](https://memory-game-azwell.netlify.app/)


# Introduction

The repo is split in 2 sections.

**Client:** client side of the project made in React.

**Server:** server side of the project made with node.js/express with a Mysql Database.
## Tech

**Client:** :
- **React** for UI
- **Redux** for global state management
- **Sass** for styling
- **Prop-Types** for types checking
- **dotenv** for environnement variable in front.

**Server:** 
- **nodeJs** **+** **Express** for server app.
- **nodemon** for easy server reboot while programming.
- **cors** to deal with http request from different origin.
- **mysql** to connect my server to my mysql database.

**Deploy:** 

- **Heroku** to deploy my web server and mysql database.
- **Netlify** to deploy my client web app to internet.
## Features

- At the start cards are face down
- User can click on 2 cards, if they're the same, pair is valided
- If not, user must click on 2 new cards.
- A timer is under the game with a progress bar (you have 3 minutes)
- Every game is sent to the database
- You can see the score at the beginning of the game.

## Optional features added

- Deployment : I have deployed both server and client to the web with Netlify and Heroku.
- During the game you can see on the left side which fruits you've already collected.
- On the right side you have a recap of the best score to beat and how many times you clicked on a pair.
- At the end of the game you can display the scoreboard and your score will be highlighted.
- You can sort scoreboard by time, score, player name

## Fof the future

I've already worked on the possibility to choose the difficulty of the game.


## API Reference

#### GET all scores

```http
  GET /api/score
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| none | none | not required |

#### GET a score by id

```http
  GET /api/score/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of score to fetch |

#### GET a score order by time/score/player and order it.

```http
  GET /api/score/sort?type={type}&asc={asc}
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **Required**. order by type of your choice between player, score, time |
| `asc`      | `boolean` | **Required**. sort ASCENDANT if `true` and DESCENDANT if `false`  |

#### POST a score

```http
  GET /api/score/${id}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `string` | **Required**. player's name |
| `time`      | `string` | **Required**. player's time |
| `score`      | `number` | **Required**. player's score |

#### DELETE a score

```http
  DELETE /api/score/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of score to delete |




## Authors

David Faure - [Portfolio](https://davidfaure.io/)

David Faure - [GitHub](https://github.com/davidfaure/)

