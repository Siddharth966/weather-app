# 🌤️ React Weather App

A simple and beautiful **Weather Finder Application** built using **React**, **Vite**, **TailwindCSS**, and **OpenWeatherMap API**.  
This app allows users to search any city and view real-time weather information such as temperature, humidity, wind speed, and local time.

---

## 🚀 Features

- 🌍 Search weather by city name  
- 🌡️ Displays temperature, humidity, pressure, and wind speed  
- 🕒 Shows the current local time of the city  
- 🎨 Modern UI built with TailwindCSS  
- ⚡ Fast and optimized using Vite  
- 🔒 API key stored securely in `.env`  

---

## 🧠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** TailwindCSS
- **API:** OpenWeatherMap API
- **HTTP Client:** Axios

---

## 📦 Folder Structure

weather-app/
├── public/
├── src/
│ ├── App.jsx
│ ├── WeatherCard.jsx
│ ├── main.jsx
│ ├── index.css
│ └── ...
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

2️⃣ Install Dependencies
bash
npm install

3️⃣ Get Your Free API Key
Visit OpenWeatherMap

Create a free account

Go to your API Keys section and copy your key

4️⃣ Create a .env File
Create a new file named .env at the root of your project and add:

VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
⚠️ Important:

Do not put quotes around the key

Ensure the file is in the root directory

The .env file is ignored by Git (check .gitignore)

5️⃣ Start the Development Server

npm run dev
The app will open on http://localhost:5173

💡 Future Enhancements
⛅ 5-day weather forecast

📍 Detect user’s current location weather

🌗 Dark/Light theme toggle

💾 Save favorite cities

👨‍💻 Author
Siddharth Maurya
Frontend Developer | React Enthusiast

📧 Contact: siddharthmaurya455@gmail.com

🛡️ License
This project is licensed under the MIT License – you are free to use, modify, and distribute it.