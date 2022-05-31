import './configs/bootstrap';
import server from './App';
import { db } from './configs/db';

const port = process.env.PORT;
const base_host = process.env.BASE_HOST;
const base_path = process.env.BASE_PATH;

server.listen(port, async () => {
  await db.sync();
  console.log(`Server is running 🔥
  Local: http://${base_host}:${port}${base_path}`);
});

