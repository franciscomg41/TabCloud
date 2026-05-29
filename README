# TabCloud (v2.0 - Manifest V3 Edition)

TabCloud is a lightweight and powerful tool that allows you to save and restore window sessions over time and across multiple computers. 

This repository contains the **v2.0 modernized fork** of the original TabCloud Chrome extension, specifically upgraded to comply with modern browser requirements.

## 🚀 The V2.0 Upgrade
Google introduced strict new security and performance rules (Manifest V3) for all Chrome extensions, deprecating the older Manifest V2 architecture that the original TabCloud was built upon. Since it was never updated to meet these new rules, the original extension was removed from the Web Store and permanently stopped working on modern browsers.

This fork was created with a single goal: **to keep TabCloud alive.** Your data is completely safe (No starting from scratch), crucially, **only the Chrome extension client was modified**.
The backend infrastructure (the Google App Engine Java project that handles the database and user accounts) remains **100% untouched and continues to be actively used**. 

This means a seamless transition for existing users:
* **You do not lose your history.** All your previously saved sessions, windows, and pages are exactly where you left them.
* **Full compatibility:** You can continue to read, modify, delete, and add new tabs to your existing TabCloud account seamlessly. 

### 🛠️ Technical Improvements in v2.0
The `chrome` folder was heavily refactored to meet current Web Store standards (with architectural guidance from Google Gemini):
* **Manifest V3 Migration:** Full migration of the core configuration. Enforced strict Content Security Policy (CSP) by removing all inline JavaScript, and moved external API calls to host_permissions.
* **Service Worker Architecture:** Replaced the legacy, memory-heavy persistent background.html with a modern, event-driven background.js Service Worker that optimizes system resource usage.
* **Asynchronous Storage API:** Fully transitioned from synchronous localStorage to the asynchronous chrome.storage.local API, ensuring non-blocking operations and better state persistence.
* **Modernized Dependencies:** Upgraded core libraries (jQuery v1.4.2 → v3.7.1) and optimized UI components to ensure compatibility with modern browser APIs.
* **Native UI Handling:** Replaced obsolete tinyscrollbar hacks with native CSS overflow-y and fixed legacy bugs related to window focus and tab activation.

## ⚖️ Credits & Acknowledgments
All original concepts, initial architecture, backend Java code, and design belong entirely to the creator **[Connor Dunn](https://github.com/Connorhd/TabCloud)**.

My contribution is strictly limited to refactoring the frontend codebase within the `chrome` folder to ensure it remains compatible with modern versions of Google Chrome (because I really love the extension).

## 📂 Original Project Structure
* **`chrome/`** - The modernized Chrome Extension (v2.0+).
* **`appengine-java/`** - The original Google App Engine Java eclipse project (Untouched).
