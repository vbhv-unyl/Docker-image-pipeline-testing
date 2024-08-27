const { app, PORT } = require('./server');

app.listen(PORT, () => {
    console.log(`Server running at PORT : ${PORT}`);
});