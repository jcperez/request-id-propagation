const express = require('express');
const app = express();

const namespace = require('cls-hooked').createNamespace;
const session = namespace('demo-session');

const PORT = 3000;

function logger(message) {
  console.log(`${session.get('request-id')} - ${message}`);
}

function generateRequestId() {
  return Math.random().toString(36).substring(7);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1
}

function createNamespace(req, res, next) {
  session.run(function () {
    const requestId = req.get('request-id') || generateRequestId();
    session.set('request-id', requestId);
    logger('request-id set');
    next();
  });
};

function waitSomeSeconds() {
  const n = getRandomNumber();
  logger(`Waiting ${n} seconds...`);
  return new Promise(resolve => {
    setTimeout(() => {
      logger(`${n} seconds have been elapsed.`)
      resolve();
    }, n * 1000);
  });
}

app.use(createNamespace);

app.get('/', async (req, res) => {
  logger(`Request to ${req.path}`);
  await waitSomeSeconds()
  res.send(`Request completed - ${session.get('request-id')}`);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
