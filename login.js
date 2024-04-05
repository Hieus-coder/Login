const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://gcs.tripi.vn/public-tripi/tripi-feed/img/474076LJT/background-bau-troi-den-xanh_035422172.jpg');
            background-size: cover; /* hiển thị ảnh sao cho nó bao phủ toàn bộ phần nội dung */
            background-position: center; /* căn ảnh vào giữa */
            background-repeat: no-repeat; /* ngăn lặp lại ảnh */
            background-attachment: fixed; /* giữ ảnh ở vị trí cố định khi cuộn */
        }

        .container {
            max-width: 400px;
            margin: 100px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
        }

        input[type="text"],
        input[type="password"],
        button {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
        }

        button {
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        #message {
            text-align: center;
            margin-top: 10px;
        }

        .error {
            color: #ff0000;
            text-align: center;
            margin-top: 10px;
        }
            .submit {
        border: none;
        padding: 0.8em 2.5em;
        outline: none;
        color: white;
        font-style: 1.2em;
        position: relative;
        z-index: 1;
        cursor: pointer;
        background: none;
        text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
        }
        
        .submit:before,
        .submit:after {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 10em;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        width: 105%;
        height: 105%;
        content: "";
        z-index: -2;
        background-size: 400% 400%;
        background: linear-gradient(
          60deg,
          #f79533,
          #f37055,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
        }
        
        .submit:before {
        -webkit-filter: blur(7px);
        filter: blur(7px);
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        -webkit-animation: pulse 10s infinite ease;
        animation: pulse 10s infinite ease;
        }
        
        .submit:after {
        -webkit-filter: blur(0.3px);
        filter: blur(0.3px);
        }
        
        .submit:hover:before {
        width: 115%;
        height: 115%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login-Hieus</h2>
        <form id="loginForm">
            <input type="text" id="username" placeholder="Username" required>
            <p>* vandanghieu</p>
            <input type="password" id="password" placeholder="Password" required>
            <p>* 22810310002</p>
            <button type="submit" class="submit">Login</button>
        </form>
        <div id="message" class="error"></div>
    </div>
    <script>
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var messageElement = document.getElementById("message");
            // Check login credentials
            if (username === "vandanghieu" && password === "22810310002") {
                messageElement.innerText = "";
                messageElement.classList.remove("error");
                window.alert("Login successful!");
   
            } else {
                messageElement.innerText = "";
                messageElement.classList.add("error");
                window.alert("Login error!");
            }
        });
    </script>
</body>
</html>

`
