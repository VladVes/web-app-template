import config from './config';
import Express from './Express';

const app = new Express().app;

app.listen(config.get('http.port') || 8080);
