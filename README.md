# GlucoseTracker

A nutrition and macro-tracking mobile app built with Expo and React Native. Log meals, track daily calories and macronutrients (protein, carbs, fat), and get meal reminders via push notifications.

## Features

- **Daily Macro Tracking** — View running totals for calories, protein, carbs, and fat against daily goals
- **Meal Logging** — Add meals with name, calories, and macronutrient values
- **Meal History** — Browse and manage all logged meals with delete support
- **Share & Copy** — Share your daily summary or copy it to clipboard
- **Meal Reminders** — Toggle push notification reminders at 12:00 and 18:00 daily
- **Dark Theme** — Clean, dark-themed UI with haptic feedback

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Expo SDK 57 |
| Router | expo-router (file-based) |
| Language | TypeScript (strict mode) |
| State | React `useState` + `useFocusEffect` |
| Storage | AsyncStorage |
| Notifications | expo-notifications |
| Haptics | expo-haptics |

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx              # Root layout (Stack)
│   └── (tabs)/
│       ├── _layout.tsx          # Tab navigator (3 tabs)
│       ├── index.tsx            # Home screen
│       ├── add-meal.tsx         # Add Meal form
│       └── meals.tsx            # All Meals list
├── components/
│   ├── HomeHeader.tsx           # Current date display
│   ├── MacroGrid.tsx            # 2x2 macro card grid
│   ├── MacroCard.tsx            # Single macro stat card
│   ├── RecentMeals.tsx          # Top 5 recent meals
│   ├── MealItem.tsx             # Single meal row
│   ├── ShareButton.tsx          # Share daily summary
│   ├── CopyButton.tsx           # Copy summary to clipboard
│   └── ReminderToggle.tsx       # Notification toggle
├── constants/
│   └── theme.ts                 # Color tokens
├── hooks/
│   ├── use-color-scheme.ts      # Color scheme hook
│   ├── use-color-scheme.web.ts  # Web-safe color scheme
│   └── use-theme-color.ts       # Theme color resolver
├── storage/
│   └── meals.ts                 # AsyncStorage CRUD
├── styles/
│   └── global.ts                # App color palette
└── utils/
    └── notifications.ts         # Notification scheduling
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

### Installation

```bash
pnpm install
```

### Running the App

```bash
# Start the development server
pnpm start

# Run on iOS simulator
pnpm run ios

# Run on Android emulator
pnpm run android

# Run on web
pnpm run web
```

## Test APK

Download the latest Android APK build for testing:

[**Download APK**](https://expo.dev/accounts/coder7575/projects/glocosetracker/builds/6a91acfc-82a2-43a5-ad98-731e59fc3823)

## Building & Deploying with EAS

### Prerequisites

```bash
npm install -g eas-cli
eas login
```

### Build Commands

| Platform | Profile | Command |
|----------|---------|---------|
| Android | Preview (APK) | `eas build -p android --profile preview` |
| Android | Production (AAB) | `eas build -p android --profile production` |
| iOS | Preview | `eas build -p ios --profile preview` |
| iOS | Production | `eas build -p ios --profile production` |

### Submit to App Stores

```bash
eas submit -p android --profile production
eas submit -p ios --profile production
```

### Credential Management

```bash
eas credentials
```

For more details, see the [EAS Build documentation](https://docs.expo.dev/build/introduction/).

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm start` | Start Expo development server |
| `pnpm run android` | Start on Android |
| `pnpm run ios` | Start on iOS |
| `pnpm run web` | Start on web |
| `pnpm run lint` | Run ESLint |
| `pnpm run reset-project` | Reset project to starter template |

## Learning Resources

This project is inspired by [MacroZone](https://github.com/bradtraversy/macrozone) by Brad Traversy — a great reference for building a macro-tracking app with React Native and Expo. Check it out to learn more about:

- React Native and Expo fundamentals
- File-based routing with expo-router
- Building nutrition and fitness tracking UIs
- Working with AsyncStorage for local persistence

## License

Private project.
