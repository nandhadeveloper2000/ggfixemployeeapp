// Use your computer's IP when running on a physical device so the app can reach your backend.
// Run: set EXPO_PUBLIC_API_HOST=192.168.1.5  (then npx expo start)
// Or create .env with EXPO_PUBLIC_API_HOST=192.168.1.5
const host = process.env.EXPO_PUBLIC_API_HOST || null;

export default {
  expo: {
    name: 'Repair Shop Employee',
    slug: 'ggfixemployee',
    // EAS account/organization that owns the project (from your Expo dashboard).
    // Verify this matches expo.dev → your account. Change if different.
    owner: 'snandhas-organization',
    version: '1.0.0',
    platforms: ['ios', 'android', 'web'],
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    jsEngine: 'hermes',
    splash: { resizeMode: 'contain', backgroundColor: '#202124' },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.ggfix.employeeapp',
      infoPlist: {
        NSAppTransportSecurity: { NSAllowsArbitraryLoads: true },
      },
    },
    android: { package: 'com.ggfix.employeeapp', adaptiveIcon: { backgroundColor: '#202124' } },
    plugins: [
      // The bare `android.usesCleartextTraffic` key is NOT read by Expo prebuild —
      // cleartext HTTP must be enabled via expo-build-properties or the release APK blocks it.
      ['expo-build-properties', { android: { usesCleartextTraffic: true } }],
    ],
    extra: {
      API_HOST: host,
      // Required for EAS builds. Get this value by running `npx eas init`
      // (it prints the ID), or copy it from expo.dev → your project → settings.
      eas: {
        projectId:
          process.env.EAS_PROJECT_ID ||
          '7a48d19f-9df0-48fb-bed0-16850d23b393',
      },
    },
  },
};
