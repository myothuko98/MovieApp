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
   git clone [<repository-url>](https://github.com/myothuko98/MovieApp.git)
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

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For development and testing.
- **React Navigation**: For navigation between screens.
- **FreeTestAPI**: For fetching movie data.

---

## Screenshots

_Add screenshots or a video demonstration of the app here._

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
