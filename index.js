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
    <!-- Tailwind CSS CDN -->
    <script src="https://jsdelivr.net"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        body {
            margin: 0;
            background-color: #0f172a;
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .main-container {
            text-align: center;
            padding: 2rem;
            background-color: #1e293b;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 2px solid #eab308;
            max-width: 28rem;
            width: 90%;
            position: relative;
        }
        .click-box {
            height: 10rem;
            background-color: #334155;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed #64748b;
            margin-bottom: 1rem;
            cursor: pointer;
            transition: transform 0.1s;
        }
        .click-box:active {
            transform: scale(0.96);
        }
        .pop-text {
            position: absolute;
            font-weight: 700;
            color: #facc15;
            font-size: 1.5rem;
            pointer-events: none;
            animation: floatUp 1s forwards ease-out;
        }
        @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-80px); }
        }
    </style>
</head>
<body>
    <div class="main-container" id="containerArea">
        <h1 class="text-3xl font-bold text-yellow-400 mb-4 animate-bounce">🏯 CHÙA ONLINE 🏯</h1>
        <p class="text-gray-300 mb-4">Bấm vào ô đứt nét bên dưới để tích lũy thêm Công Đức!</p>
        
        <div class="click-box" onclick="addProgress(event)">
            <div>
                <span id="displayVal" class="text-4xl font-extrabold text-yellow-400 block">0</span>
                <span class="text-gray-400 text-sm">Công Đức Hiện Tại</span>
            </div>
        </div>
        
        <div class="w-full h-52 bg-black rounded-lg overflow-hidden mb-4 border border-gray-700">
            <iframe src="https://plays.org" class="w-full h-full border-none"></iframe>
        </div>

        <p class="text-xs text-gray-500">Mọi người đều có thể vào trải nghiệm công khai không cần đăng nhập.</p>
    </div>

    <script>
        let score = parseInt(localStorage.getItem('savedScore')) || 0;
        document.getElementById('displayVal').innerText = score;

        function addProgress(event) {
            score += 1;
            document.getElementById('displayVal').innerText = score;
            localStorage.setItem('savedScore', score);

            // Hiệu ứng chữ nổi bay lên khi click
            const pop = document.createElement('div');
            pop.className = 'pop-text';
            pop.innerText = '+1 Công Đức';
            
            const area = document.getElementById('containerArea').getBoundingClientRect();
            pop.style.left = (event.clientX - area.left - 40) + 'px';
            pop.style.top = (event.clientY - area.top - 20) + 'px';
            
            document.getElementById('containerArea').appendChild(pop);
            setTimeout(() => pop.remove(), 1000);
        }
    </script>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
