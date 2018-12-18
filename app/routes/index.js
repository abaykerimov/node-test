/**
 * Created by Абай on 18.12.2018.
 */
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
    noteRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};
