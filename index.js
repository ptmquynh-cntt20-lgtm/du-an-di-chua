const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Chùa</title>
    <link rel="preconnect" href="https://googleapis.com">
    <link rel="preconnect" href="https://gstatic.com" crossorigin>
    <style>
        *,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}
        html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif}
        body{margin:0;line-height:inherit;background-color:#111827;color:#fff;min-height:100vh;display:flex;align-items:center;justify-content:center}
        h1{font-size:1.875rem;font-weight:700;color:#facc15;margin-bottom:1rem}
        .container{text-align:center;padding:1.5rem;background-color:#1f2937;border-radius:0.75rem;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);border:1px solid #facc15;max-width:28rem;width:90%}
        .box{height:10rem;background-color:#374151;border-radius:0.5rem;display:flex;align-items:center;justify-content:center;border:1px dashed #6b7280;margin-bottom:1rem}
        @keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}
        .animate-bounce{animation:bounce 1s infinite}
    </style>
</head>
<body>
    <div class="container">
        <h1 class="animate-bounce">🏯 KHÔNG GIAN TÂM LINH 🏯</h1>
        <p style="color:#d1d5db; margin-bottom:1.5rem;">Chào mừng bạn đến với ứng dụng Chùa trực tuyến công khai.</p>
        <div class="box">
            <span style="color:#9ca3af">[ Khu vực tích hợp trò chơi / nội dung ]</span>
        </div>
        <p style="font-size:0.75rem; color:#6b7280">Mọi người đều có thể truy cập tự do không cần đăng nhập.</p>
    </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
