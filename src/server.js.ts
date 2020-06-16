import express from 'express';
import path from 'path';

// import webpack from "webpack";
// import webpackDevMiddleware from "webpack-dev-middleware";
// import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.get('/*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
