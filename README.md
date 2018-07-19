# request-id-propagation
Node.js demo app for request-id propagation

## Table of Contents

1. [Overview](#overview)
1. [Getting Started](#getting-started)

## Overview

This implementation shows how to propagate a piece of information (e.g. a request id) and have that value available during the entire request lifecycle.

This is very useful, because we can identify all the log entries that belong to an specific request when handling concurrent requests, without having to pass down these values to every function we call.

This solution uses [cls-hooked](https://www.npmjs.com/package/cls-hooked) which only runs on Node >= 8.2.1. For Node version < 8 is recommended to use [continuation-local-storage](https://github.com/othiym23/node-continuation-local-storage)

**[▲ Back to Top](#table-of-contents)**

## Getting Started

### Prerequisites

You need to have the following tools installed on your computer.

* [Node.js](https://nodejs.org/) [8.11.3].
    To install Node.js, download it from the [Node.js webpage](https://nodejs.org/).

### Local Setup

To setup the project:

1. In the project folder, install the dependencies.
    ```bash
    npm install
    ```
1. Start the project.
    ```bash
    node index.js
    ```
   Demo server runs locally at [http://localhost:3000/](http://localhost:3000/).
