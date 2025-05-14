const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');  // 仅限临时使用
    next();
  });
  
// 托管带虚拟路径的静态目录
app.use('/assets', express.static(path.join(__dirname, 'public'), ));

// 自定义路由（需放在静态中间件之后）
app.get('/api/data', (req, res) => {
  res.json({ status: 'active' });
});

app.listen(PORT, () => {
  console.log(`服务已启动：http://localhost:${PORT}`);
});