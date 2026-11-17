# Hemli — Home Control Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/hemli-home-control-dashboard/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive, standalone frontend reconstruction of the uploaded 5.53-second video (720 × 1280, 30 fps).

## Run
1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox or Safari.
3. No npm install, build step, API key or backend required.

Optional:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## Video-derived interface
- Brand: Hemli · 14 Larchmore Road.
- Home dashboard greeting: “Good evening, Imari”.
- Status cards: Inside 19.6°, Power now 1.30 kW, Doors all locked, Air “Study is stuffy”.
- House floor plan with room hotspots and Lights / Climate / People filters.
- Living room widget with thermostat, light toggles and Heat/Cool/Auto/Off.
- Rooms: Living room, Kitchen, Main bedroom, Ada's room, Theo's room, Study, Bathroom, Hallway and Garden.
- Energy page: usage, cost, current draw, month usage, hourly curve and appliance breakdown.
- Media page: Now playing, speakers/TV, Harbour Lights / Slow Weather and up-next queue.
- Security page: cameras, locks & alarm, activity.
- Devices, Climate, Routines and Family.

## Interactions
- Navigation between all pages, room tabs and floorplan room hotspots.
- Adjust room and whole-home temperature.
- Switch lights, devices, climate modes and routines.
- Lock-up and notification/activity dialogs.
- Energy CSV export.
- Media queue selection and play/pause.
- Add device, create routine, invite household member.
- Command input accepts demo commands such as “dim the living room to 30%”, “lights off”, “lock up”, “energy”.
- Dark/light theme toggle.

## Source code visible in the recording
The recording shows a 14-line TypeScript snippet in `src/motion.ts`. It is transcribed from the visible code panel. It defines `slidePill(pill, to)` using one animated CSS `clip-path`, chooses leading/trailing edges according to navigation direction, and uses GSAP tweens with durations 0.36s and 0.55s and easing `power3.out` / `power3.inOut`. The code panel does not show the `Edges` type, `prev` declaration or GSAP import, so those surrounding definitions cannot be extracted from this clip. The reconstructed app uses a native active-tab pill style; the TypeScript snippet is preserved separately as the source excerpt.

## Demo / integration note
All household names, readings, device states, room details, energy numbers, cameras, media and event history are sample values based on the video. The controls update local UI only. No real smart-home hub, camera feed, thermostat, lock, light, sensor or music service is connected. Room photos load from Unsplash and need internet access; the dashboard layout and controls work locally.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
