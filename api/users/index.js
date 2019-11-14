app.get('/getusers', (req, res) => {
    res.send(db);
});

app.post('/adduser', (req, res) => {
    const {
        name,
        age
    } = req.body;
    if (name != null && age != null) {
        db.push({
            name: name,
            age: parseInt(age)
        });
        res.send(db);
    } else {
        res.send("No se han proporcionado todos los campos necesarios");
    }
});