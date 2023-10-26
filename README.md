# Description

rn-firebase-config is a React Native module designed to extract Firebase configuration details from native files (google-services.json for Android and GoogleService-Info.plist for iOS) to be used in JavaScript code.
How it Works

## Behind the scenes, rn-firebase-config employs native modules in both Android and iOS:

    - Android: Reads the google-services.json file from the assets folder, extracts the required Firebase configuration details, and returns them to the React Native JavaScript layer.

    - iOS: Reads the GoogleService-Info.plist file, extracts the required Firebase configuration details, and returns them to the React Native JavaScript layer.

# How to Use

    Ensure that you have the google-services.json file in the assets folder for Android and the GoogleService-Info.plist in the main bundle for iOS.

    Use the extractFirebaseConfig function in your React Native code as follows:

```javascript

import { extractFirebaseConfig } from 'rn-firebase-config';

const firebaseConfig = extractFirebaseConfig();
console.log(firebaseConfig);

```

This function logs the extraction process and returns the extracted configuration. If the extraction is successful, you'll get an object with Firebase details; otherwise, a warning log indicates any issues.
Points to Note

    - The module handles errors gracefully and will provide clear logs in case of extraction failures.

    - For security reasons, be cautious about logging the full Firebase config in a production environment as it may expose sensitive information.

## Dependencies

    React Native

## Installation

For the module to work, you need to ensure that the native modules are correctly linked in your React Native project. Follow the standard React Native linking procedures for native modules if not using auto-linking.
Contributing

## We welcome contributions to rn-firebase-config! Here's how you can help:

    - Fork the Repository: Click on the 'Fork' button at the top right corner of this page.

    - Clone Your Forked Repository: git clone https://github.com/YOUR_USERNAME/rn-firebase-config.git

    - Navigate to the cloned directory: cd rn-firebase-config

    - Create a New Branch: git checkout -b new-feature-or-bug-fix

    - Make Changes: Implement your new feature or fix a bug and commit the changes.

    - Push to GitHub: git push origin new-feature-or-bug-fix

    - Submit a Pull Request: Go to the rn-firebase-config GitHub page and click on the 'New Pull Request' button. Select your branch from the dropdown and submit your pull request.

    - Wait for the Review: Maintainers will review your pull request, suggest changes if necessary, and merge it once it's approved.

## License

rn-firebase-config is licensed under the MIT License. Refer to the LICENSE file in the repository for more details.