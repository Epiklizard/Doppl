# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install

   npx expo install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
   npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
   ```
    GO TO STEP 2
    
    ...some app building notes...

    To setup development builds (seeing custom splash screens: https://docs.expo.dev/versions/latest/sdk/splash-screen/)

    ON CLOUD (PRODUCTION BUILD - standalone)
    Create a new project to get project id: https://expo.dev/
    Names can be whatever, but the slug name should match app.json/expo/slug field 
    eas init creates eas.json
    build:configure doc = https://github.com/expo/eas-cli?tab=readme-ov-file#eas-buildconfigure
    ... still not done

    ```bash
    npm install -g eas-cli
    npx expo install expo-splash-screen
    npx eas-cli@latest init --id [project_id_here]
    eas init 
    eas build:configure --platform android
    ```

    LOCALLY BUILD THE FILE (DEVELOPMENT BUILD - hot reload, good for dev, depends on metro for main contents)
    https://docs.expo.dev/develop/development-builds/expo-go-to-dev-build/
    open windows command and go to root folder
    ```bash
    npx expo prebuild --clean
    npx expo run:android --device
    ```
    if there are java / misc errors, try gradlew clean first and then the two commands above:
    ```bash
    cd android
    ./gradlew clean
    cd ..
    ```
    took 10 mins first run but it built the .apk AND also opened a development server... wow

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
