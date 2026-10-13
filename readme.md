# NoTrace Browser

NoTrace Browser is a lightweight desktop browser project built with Electron. It uses DuckDuckGo for web searches and provides a minimal interface with tabs, navigation controls, and a simple home screen.

## Features

- **Minimal interface:** A clean, distraction-free browser layout.
- **DuckDuckGo search:** Search queries open through DuckDuckGo.
- **Tabbed browsing:** Open, switch between, and close tabs.
- **Navigation controls:** Go back, go forward, or return to the home screen.
- **Custom window controls:** Frameless desktop window with minimize, maximize, and close controls.
- **Windows packaging:** Electron Builder is configured to create a Windows installer.
- **Open source:** Licensed under the MIT License.

## Requirements

- Node.js and npm
- A supported desktop operating system
- Internet access for browsing

## Run locally

1. Clone this repository.
   ```bash
   git clone https://github.com/BaskalM0ment/NoTrace-Browser.git
   cd NoTrace-Browser
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the browser.
   ```bash
   npm start
   ```

## Build the Windows installer

Run:

```bash
npm run build
```

Electron Builder generates installer output in the `dist` directory.

## Project structure

- `index.html` contains the browser interface and tab/navigation logic.
- `main.js` creates the Electron window and handles window-control events.
- `package.json` defines dependencies and build configuration.
- `icon.ico` is the Windows application icon.

## Privacy

NoTrace Browser currently uses DuckDuckGo for search. Websites you visit can still receive information required to load their pages, and this project should not be treated as a guarantee of complete anonymity or protection against all tracking. Review the code and privacy behavior before relying on it for sensitive activity.

## Project status

This is an early-stage project. Test builds on your target operating system before distributing them. Publish downloadable release installers through the repository's GitHub Releases page.

## License

MIT
