# Movie App

## Overview

The Movie App is a React Native application that interacts with the [FreeTestAPI Movies API](https://www.freetestapi.com/api/v1/movies). It allows users to browse, search, and view details of movies. The app demonstrates API integration, state management, and navigation in a mobile environment.

---

## Features

### 1. Home Screen (Movies List)
- Fetches and displays a list of movies from the API.
- Displays movie title, year of release, and director name.
- Scrollable list using `FlatList`.

### 2. Search Functionality
- Includes a search bar to filter movies dynamically.
- Sends API requests with the search query.
- Debounced input to optimize performance.

### 3. Movie Detail Screen
- Navigates to a detail screen on selecting a movie.
- Fetches and displays full details of the selected movie.

### 4. User Feedback
- Loading indicators for data fetching.
- Error messages for API failures.
- Displays a message for empty search results.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/myothuko98/MovieApp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MovieApp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   expo start
   ```

5. Run the app on an emulator or physical device:
   - For Android: Press `a` in the terminal.
   - For iOS: Press `i` in the terminal.

---

## APK Included

The project includes a pre-built APK file (`MovieApp.apk`) located in the root of the `MovieApp` directory. You can use this APK to test the application on an Android device or emulator.

---

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For development and testing.
- **React Navigation**: For navigation between screens.
- **FreeTestAPI**: For fetching movie data.

---

## Screenshots
<img src="https://github.com/user-attachments/assets/373c286b-8787-4c1e-ae0f-970d854766ee" alt="screenshot" width="300" height="600" />
<img src="https://github.com/user-attachments/assets/8f44e4bf-cc55-4d95-88dd-af9f5b8629ee" alt="screenshot" width="300" height="600" />
<img src="https://github.com/user-attachments/assets/3d6986e4-a122-4c76-ba3b-f054c1c10b64" alt="screenshot" width="300" height="600" />


---

## Folder Structure

```
MovieApp/
├── app/
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── explore.tsx
│   │   ├── index.tsx
├── assets/
│   ├── fonts/
│   ├── images/
├── components/
├── constants/
├── hooks/
├── scripts/
├── app.json
├── eas.json
├── package.json
├── tsconfig.json
```
---

## License

This project is licensed under the MIT License.
