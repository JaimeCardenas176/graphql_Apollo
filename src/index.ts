const express = require('express');
const { ApolloServer } = require('apollo-server-express')
import { Request, Response, NextFunction } from 'express'
const port = process.env.port || 3000;

const typeDefs = require('./lib/schema')
const resolvers = require('./lib/resolvers')


const app = express();
const server = new ApolloServer({
    typeDefs:`${typeDefs}`,
    resolvers

});

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.locals.ip =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;
    res.locals.auth = req.headers.authorization;
    res.locals.timeout =
      Number(process.env.KEEP_ALIVE_MSECS) ||
      0;
    next();
  });

server.applyMiddleWare({app});

app.listen({port: port}, () => console.log(`server up and running at port ${port}`+server.graphqlPath))
