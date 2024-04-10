const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Отримуємо логін з запиту
  const queryObject = url.parse(req.url, true).query;
  const login = queryObject.login;

  // Перевіряємо, чи логін співпадає з логіном у Moodle
  if (login === 'is-21fiot-22-050') {
    // Встановлюємо HTTP-статус 200 (ОК)
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    
    // Відправляємо відповідь з особистими даними у форматі HTML
    res.end(`
      <html>
        <head>
          <title>Особисті дані</title>
        </head>
        <body>
          <h1>Особисті дані</h1>
          <p><strong>Прізвище:</strong> Мельник</p>
          <p><strong>Ім'я:</strong> Софія</p>
          <p><strong>Курс:</strong> 2 курс</p>
          <p><strong>Група:</strong> ІС-21</p>
        </body>
      </html>
    `);
  } else {
    // Встановлюємо HTTP-статус 404 (Not Found) у разі невірного логіну
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Користувач не знайдений');
  }
});

// Сервер слухає порт 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущений на порті ${port}`);
});