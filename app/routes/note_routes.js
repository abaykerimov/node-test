/**
 * Created by Абай on 18.12.2018.
 */
module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // Здесь будем создавать заметку.
        res.send('Hello')
    });
};
