const http = require('http');

const server = http.createServer((req, res) => {
    // Setting default headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Correctly set content type

    // Basic routing
    if (req.url === '/' && req.method === 'GET') {
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.end('This is the About Page.');
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.end('Contact us at abc@example.com');
    } else {
        // 404 Not Found for other routes
        res.statusCode = 404;
        res.end('404 Page Not Found');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
