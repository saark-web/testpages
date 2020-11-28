const app = require('express')()

app.get("/", (req, res) => {
    res.send("BRUH")
})

const listener = app.listen(3000, () => console.log(listener.address().port))