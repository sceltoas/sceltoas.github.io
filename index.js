const path = require('path');
const http = require('http');

const express = require('express');
const serveFavicon = require('serve-favicon');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'production') {
    const enforce = require('express-sslify');
    const compression = require('compression');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(compression());
}

app.use(morgan('tiny'));

app.use(serveFavicon(path.join(__dirname, 'favicon.ico')));
app.use(express.static(path.resolve(__dirname)));

app.use((req, res, next) => {
    res.status(404);
    res.send('Not Found');
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.on('listening', () => console.log(`Listening on port ${port}`));

server.listen(port);
