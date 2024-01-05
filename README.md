
# ADHFit - Health supporting and fitness monitoring application



## Introduction
- Sofeware within the scope of Mobile Application Development subject (INT 3120), University of Engineering and Technology, VNU.
- The software is developed with React Native programming language for the Front-end, NodeJS for the Back-end, using sensors attached to the NodeMCU ESP8266.
- The application helps users conveniently monitor their health and sports activities with additional hardware devices on their personal phones.

## Authors

- [Nguyen Minh Hieu, 21020908, VNU - UET](https://github.com/PilloWws)
- [Nguyen Viet Duc, 21020904, VNU - UET](https://github.com/ducminh-uet)
- [Vu Tuan Anh, 21020429, VNU - UET](https://github.com/VuTuanAnh-1368)


## Programming languages and hardware description
### Programming languages
- Front-end: React Native
- Back-end: NodeJS
- Database: MongoDB
### Hardwares
- Acceleration sensor - MPU6050
- Heart rate sensor - MAX30100
- Air quality sensor - MQ135
- NodeMCU ESP8266

## Features
- Login/Logout
- Monitor your steps, heart rate, sleep, kcal, co2
- Sports activity tracking (running)
- Support articles
- Multiple languages (Vi/En)
- Light/dark mode toggle
- Exercise goals
- Notifications (Tracking step && Weather)

## API Reference

#### Weather API

```http
  GET http://api.weatherapi.com/v1/forecast.json?key=&q=&days=&aqi=&alerts=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `string` | **Required**. Your API key |
| `q` | `string` | **Required**. Your location |
| `days` | `string` | **Required**. Number of days you want to query |
| `aqi` | `string` | **Required**. Gt air quality |
| `alerts` | `string` | **Required**. Get weather alert data |


## Documentation

[Documentation]([https://linktodocumentation](https://docs.google.com/document/d/1gbCcq1MDdTvpESl276nn1ER8RAWpwdCPB0WoXKpOQZg/edit?usp=sharing))

## Demo

[Demo](https://drive.google.com/file/d/1aCQbpR0H9fXqEvQv-Txqy5uTLy1ncWpx/view?usp=sharing)


