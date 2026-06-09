# HelloFintech

A personal React Native learning project — a fintech mobile application built with Expo.

## Overview

HelloFintech is a mobile app designed to explore core fintech functionalities including user authentication, account dashboards, transaction management, and financial statistics. This project was developed as a learning exercise while studying JavaScript and React Native.

**Note:** This is an ongoing personal project and is not production-ready.

## Features

- **Authentication** — User login and registration
- **Dashboard** — Main home screen with quick action buttons
- **Transactions** — View and manage financial transactions
- **Deposits** — Deposit functionality
- **Statistics** — Visual charts and financial analytics
- **Profile** — User profile management
- **Bottom Tab Navigation** — Easy navigation between main sections

## Tech Stack

- **React Native** (0.81.5)
- **Expo** (~54.0.20)
- **React Navigation** (7.x)
  - Native Stack Navigator
  - Bottom Tab Navigator
- **React** (19.1.0)
- **Expo Icons** (Ionicons, AntDesign)

## Project Structure

```
HelloFintech/
├── App.js                    # Main app entry point
├── RootNavigator.jsx         # Root navigation logic
├── TabNavigator.jsx          # Bottom tab navigation
├── StackNavigator.jsx        # Stack navigation
├── authNavigator.jsx         # Auth flow navigation
│
├── Screens/
│   ├── homescreen.jsx        # Dashboard screen
│   ├── Statistics.jsx        # Stats/Charts screen
│   ├── Profile.jsx           # Profile screen
│   ├── DepositScreen.jsx     # Deposit screen
│   ├── Transactions.js       # Transactions screen
│   ├── Login.jsx             # Login screen
│   └── Register.jsx          # Registration screen
│
└── Styles/
    ├── HomeScreenStyle.js
    ├── StatScreenStyle.js
    ├── ProfileScreenStyle.js
    ├── Depositstyles.js
    └── authstyle.js
```

## Getting Started

### Prerequisites

- Node.js and npm
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

- **Android:**

  ```bash
  npm run android
  ```

- **iOS:**

  ```bash
  npm run ios
  ```

- **Web:**

  ```bash
  npm run web
  ```

- **Development:**

  ```bash
  npm start
  ```

## Development Notes

This is a personal learning project created while exploring React Native fundamentals. The codebase reflects a work-in-progress state and is used primarily for experimentation and skill development.

## Future Improvements

- State management implementation (Redux/Context API)
- Backend integration
- Real data persistence
- Enhanced UI/UX
- Complete transaction history
- Advanced statistics and analytics
- Error handling and validation

> [!NOTE] > Future improvements are not guaranteed

## License

Personal project — not licensed for external use yet.
