const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/index');

app.use('/', routes);

app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
