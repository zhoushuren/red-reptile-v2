import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

app.model(require("./models/email"));
app.model(require("./models/url"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router

app.router(require('./router.js'));

// 5. Start
app.start('#root');
