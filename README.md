# UKHSA Mobile Application Automation

## Creating tests for Android and iOS with Appium and WebdriverIO.

### What is Appium and WebdriverIO?


Appium and WebdriverIO are both tools used for automated testing of applications, but they serve different purposes and operate in different environments:

-   **Appium:** Specialized for mobile application testing on both iOS and Android platforms. It automates tests without requiring changes to the app and supports various programming languages.
    
-   **WebdriverIO:** Primarily used for web application testing, it also supports mobile testing through integration with Appium. It operates in the JavaScript ecosystem and offers customisable commands for a flexible testing approach.

> In summary, Appium is more focused on mobile application testing (both
> Android and iOS), while WebdriverIO, although capable of mobile
> testing through Appium, is primarily used for web application testing
> and offers a JavaScript-centric environment.

## Tools and Technology
To set up Appium and WebdriverIO on a Mac, you'll need a range of tools and technologies. Here's a comprehensive list:

1. **Operating System:**
   - macOS: Ensure your Mac is running a recent version of macOS for compatibility and security.

2. **Programming Languages:**
   - **JavaScript/Node.js:** Since WebdriverIO is written in JavaScript, Node.js is essential. Install the latest stable version of Node.js from the [official website](https://nodejs.org/en/download/).

3. **Java Development Kit (JDK):**
   - **Java JDK:** Appium requires Java, so install the latest Java Development Kit. You can download it from [Adoptium](https://adoptium.net/en-GB/).

4. **Integrated Development Environment (IDE):**
   - **IDE (like Visual Studio Code or IntelliJ IDEA):** An IDE will help in writing and managing your test scripts efficiently.

5. **Mobile Platform SDKs:**
   - **Android SDK:** For testing Android apps, you need the Android SDK, which is part of Android Studio. Download Android Studio from the [Android developer website](https://developer.android.com/studio).

6. **Appium:**
   - **Appium Server:** Download and install Appium. It can be installed via npm (Node Package Manager) using the command `npm install -g appium`.

7. **Appium Desktop:**
   - **Appium Inspector:** For inspecting elements in your mobile application, you can use Appium Inspector, which is part of Appium Desktop. Download it from the [Appium GitHub releases page](https://github.com/appium/appium-desktop/releases).

8. **WebdriverIO:**
   - **WebdriverIO CLI:** Install WebdriverIO CLI through npm using `npm install @wdio/cli`.

9. **Additional Tools:**
   - **Git:** For version control and managing code repositories. Download from the [official Git website](https://git-scm.com/downloads).
   - **Appium Doctor:** To check if all dependencies for Appium are installed, use `npm install -g appium-doctor`.
   - **Terminal:** The macOS Terminal for executing commands.

10. **Environment Variables:**
    - **Setting up JAVA_HOME and ANDROID_HOME:** Configure environment variables for Java and Android SDK in your `.bashrc` or `.zshrc` file, depending on your shell.

11. **Emulators or Real Devices:**
    - **Android Emulator or iOS Simulator:** Use emulators/simulators for testing, which can be set up via Android Studio or Xcode (for iOS).
    - **Real Devices:** Optionally, you can also configure real Android or iOS devices for testing.

12. **Browsers (for Web Testing):**
    - **Chrome, Firefox, etc.:** Ensure you have the necessary browsers installed if you plan to test web applications as well.

13. **Dependencies and Libraries:**
    - **NPM Packages:** You might need additional npm packages based on your project requirements, such as `chai` for assertions.

14. **WebDriverIO Configurations:**
    - Configure WebDriverIO to run tests on mobile devices through Appium. This includes setting capabilities in `wdio.conf.js`.

15. **Version Control:**
    - **GitHub or similar services:** For storing and version-controlling your test scripts.

This setup provides a comprehensive environment for automated testing of both web and mobile applications using Appium and WebdriverIO on a Mac.

Certainly! Here's the reworded version in numbered bullet points:

## Mac OS Setup Instructions
1. Begin by installing NodeJS. Download it from the [NodeJS website](https://nodejs.org/en/download).
2. After installation, verify NodeJS. Open your terminal and type `node --version`.
3. Check if Java is installed. In the terminal, type `java --version`. If Java is absent, download and install Java JDK from [Adoptium](https://adoptium.net/en-GB/).
4. Verify the JAVA home directory with the command `echo $JAVA_HOME` in the terminal. For guidance, visit [Mkyong's Java Setup Guide](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/).
5. Discover the full Java path by entering `/usr/libexec/java_home` in the terminal.
6. Note the path that appears, typically something like `/library/Java/JavaVirtualMachine/..../Contents/Home`.
7. Configure the Java home path. Open `~/.zshenv` in Vim.
8. In Vim, insert this line: `export JAVA_HOME=$(/usr/livexec/java_home)` and save the file.
9. Apply the new Java home setting. In the terminal, type `source ~/.zshenv`.
10. Confirm the updated JAVA home directory. Again, in the terminal, enter `echo $JAVA_HOME`.

Sure, here's a reworded version of the instructions for downloading and installing Android Studio, along with setting up the environment:

## Android Studio Installation and Setup
1. Download Android Studio from the [official website](https://developer.android.com/).
2. Set up the `ANDROID_HOME` environment variable.
3. Verify the `ANDROID_HOME` directory with the command: `echo $ANDROID_HOME` in the terminal.
4. Navigate to the Android SDK folder: Enter `cd /Users/YOURUSERNAME/Library/Android/sdk/` in the terminal.
5. Use the `ls` command to confirm the presence of `platform-tools` and `tools` directories.
6. Open the `~/.zshenv` file in Vim.
7. In Vim, add the following lines to set the Android SDK paths and save the file:
   - `export ANDROID_HOME="/Users/YourUserName/Library/Android/sdk"`
   - `export PATH=$ANDROID_HOME/platform-tools:$PATH`
   - `export PATH=$ANDROID_HOME/tools:$PATH`
8. Activate the new environment settings by typing `source ~/.zshenv` in the terminal.
9. Test the Android Debug Bridge installation by entering `adb` in the terminal.
10. Verify the Android Debug Bridge version.
11. Confirm the JAVA home directory is correctly set by typing `echo $JAVA_HOME` in the terminal.

This version of the instructions is structured for clarity and ease of following, ensuring each step is distinct and straightforward.

Certainly! Here's a reworded version of the instructions for setting up an Android emulator and Appium Inspector:

## Android Emulator Setup
1. Launch Android Studio.
2. Access the AVD (Android Virtual Device) Manager from within the studio.
3. View the list of available virtual devices.
4. Initiate the creation of a new virtual device.
5. Select and download the latest operating system version for your new virtual device.
6. Finalize the setup by clicking 'Finish'.
7. Start the emulator by clicking the play icon, which launches the device simulator.

## Appium Inspector Installation
1. Download the Appium Inspector from its [release page on GitHub](https://github.com/appium/appium-inspector/releases).
2. Once downloaded, proceed to open the Appium Inspector application.


## Getting Started with Appium and WebdriverIO on MacOS


1. **Initialize npm Project:**
   - `npm init`

2. **Install Appium:**
   - Global installation of Appium (next version): `npm install -g appium@next`

3. **Install Appium Doctor:**
   - Global installation of Appium Doctor: `npm install -g appium-doctor`

4. **WebDriverIO Initialization:**
   - Initialize WebDriverIO: 

### WebDriverIO Installation and Configuration
- Initiate installation: Run `npm init wdio` in the terminal.
- Choose testing type: Select `E2E Testing - of Web or Mobile Applications`.
- Determine automation backend location: Choose `On my local machine`.
- Select the environment for automation: Opt for `Mobile - native, hybrid and mobile web apps, on Android or iOS`.
- Decide on the mobile environment: Choose `Android - native, hybrid and mobile web apps, tested on emulators and real devices`.
- Pick a testing framework: Select `Mocha`. More info at [Mocha's Website](https://mochajs.org/).
- Decide on compiler usage: Choose `No!`.
- Auto-generation of test files: Select `No`.
- Select a reporter: Opt for `spec`.
- Include a plugin: Add `wait-for`, providing utilities for conditional task completion.
- Add a service: Choose `appium`.
- Confirm package installation: Select `Yes` for `npm install`.



5. **Install Appium for Development:**
   - Install Appium as a dev dependency (next version): `npm install appium@next --save-dev`

6. **Install Appium Drivers:**
   - Install UIAutomator2 driver for Appium: `appium driver install uiautomator2`
   - Install XCUITest driver for Appium (for iOS): `appium driver install xcuitest`

7. **TypeScript and ts-node Installation:**
   - Install TypeScript and ts-node as dev dependencies: `npm i -D typescript ts-node`

8. **Install Appium WebDriverAgent:**
   - Install Appium WebDriverAgent for iOS: `npm i appium-webdriveragent`

9. **Babel Setup:**
   - Install Babel dependencies: `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`

10. **ESLint and Plugin Setup:**
    - Install ESLint and WebDriverIO plugin: `npm install eslint-plugin-wdio --save-dev`
    - Install ESLint: `npm i eslint --save-dev`

11. **Install BrowserStack Service for WebDriverIO:**
    - Install BrowserStack service: `npm install @wdio/browserstack-service --save-dev`

Certainly, here's the information structured as numbered bullet points:

### Showing List of Devices
1. Run `adb devices` to display connected devices.
2. Use `npx wdio` to execute tests.

### Setting Up Emulator and Appium Inspector for Testing
1. Create a new virtual device `Nexus` in Android Studio, select `Android 10`, and proceed.
2. Open Appium Inspector.
3. Add required capabilities.
4. Insert the following details in JSON format:
   ```
   {
     "platformName": "Android",
     "appium:platformVersion": "11",
     "appium:deviceName": "Pixel 7",
     "appium:app": "/Users/xxxx/Documents/ukhsa-mobile-appium/app/android/ApiDemos-debug.apk",
     "appium:automationName": "UiAutomator2"
   }
   ```
5. Start Appium server on port 4724 with the command `appium -p 4724`.
6. Click 'start session' in Appium Inspector.

### Finding Elements in Android
#### Accessibility ID
1. Use the accessibility id, for example, `$('~App');`, for cross-platform compatibility.

#### Class Name / Tag Name
1. Use class name for elements like TextView, Button, Layout, for example, `$('App');`.

#### XPath
1. Use XPath as a secondary choice, for instance, `$('//*[@text=');`.

### Using UIAutomator
1. Use UISelector syntax, for example, `await $('android=new UISelector().textContains("Alert")')`.
2. Refer to UIAutomator and UISelector documentation on Appium and Android's websites.

### Working with Multiple Elements
1. Use `$` for single elements and `$$` for multiple elements.

### Package and Activities
1. Open the app in Appium Inspector and note the package name from the source tab.
2. Get the activity name using `getCurrentActivity`.
3. Example package: `"io.appium.android.apis"`.
4. Example activity: `".app.AlertDialogSamples"`.

#### App Package
1. Use the full name of the app, such as `com.google.android.youtube`.

#### App Activity
1. Access specific functionalities or screens, like `MainActivity`, `AlertDialogSamples`.
2. Direct screen access saves time and aids in test stabilization.

### Working with Alerts and Dialogs
1. Dismiss alerts with `await driver.dismissAlert()`.
2. Retrieve alert text using `console.log('ALERT TEXT -->', await driver.getAlertText());`.

### Vertical Scrolling
1. Refer to the `UiScrollable` documentation for Android.
2. Use `await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')`.

### Horizontal Scrolling
1. Implement with `await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')`.
2. For text verification, use methods to retrieve and compare text.

### Setting Up Notes App
1. Use `await driver.back()` to navigate back.

### Page Object Model
1. Page Object Model is a design pattern for code organization and readability.
2. For WebDriverIO, refer to its [documentation on Page Object Model](https://webdriver.io/docs/pageobjects/).
3. Create folders and files like `screenObjects/android/add-not.screen.js` for better code management.
### iOS Setup
1. Download and install Xcode.
2. Install Xcode command line tools: Run `xcode-select --install`.
3. Install Carthage, a dependency manager: Execute `brew install carthage`.
4. Run Appium Doctor for iOS: `appium-doctor --ios`.
5. Install WebDriverIO Config - iOS Appium XCUITest Driver.
6. Check installed drivers: `appium driver list`.
7. Install XCUITest driver: `appium driver install xcuitest`.
8. Install Appium WebDriverAgent: `npm i appium-webdriveragent`.
9. Find the simulator and OS version in Xcode: Open Xcode, go to Windows > Devices and Simulators, click on the device to see the OS version.
10. Edit `wdio.config.js` file with the following iOS configurations:
    ```
    {
        'appium:platformName': 'ios',
        'appium:platformVersion': '16.2',
        'appium:deviceName': 'iPhone 14 Pro Max',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app')
    }
    ```

### Connecting iOS Simulator with Appium Inspector
1. Open Appium Inspector.
2. Change capabilities to iOS with the following settings:
   ```
   {
     "platformName": "ios",
     "appium:platformVersion": "16.2",
     "appium:deviceName": "iPhone 14",
     "appium:app": "/Users/xxxx/Documents/ukhsa-mobile-appium/app/ios/UIKitCatalog.app",
     "appium:automationName": "XCUITest"
   }
   ```
3. Start Appium Inspector from the command line: `appium -p 4724`.

### Finding Elements in iOS
1. Use Accessibility ID for cross-platform compatibility.
2. Accessibility ID is the preferred option.
3. Locate elements by tag name.
4. Use class chain for element finding. Example: `const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'`, followed by `await $(`-ios class chain:${alertText}`).click();`.
5. Utilize predicate strings for queries. Reference: [WebDriverAgent Predicate Queries](https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules).

### Vertical Scrolling in iOS
1. Scroll up and down in applications: `await driver.execute('mobile: scroll', {direction: "down" })`.

### Picker View in iOS
1. Navigate picker views by scrolling: `await driver.execute('mobile: scroll', {direction: "down" })`.

### Setup Auto Completion
1. In the root directory, create a `jsconfig.json` file. Refer to the WebDriverIO [auto-completion documentation](https://webdriver.io/docs/autocompletion/). Include:
   ```json
   {
       "compilerOptions": {
           "types": ["node", "@wdio/globals/types", "@wdio/mocha-framework"],
           "module": "commonjs"
       },
       "exclude": ["node_modules"]
   }
   ```

### Setup Babel
1. Babel is a JavaScript compiler used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
2. In the root directory, create a `babel.config.js` file. For details, see WebDriverIO's [Babel documentation](https://webdriver.io/docs/babel/).
3. Execute the command: `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`.

### Setup Linter
1. ESLint is a tool for identifying and reporting patterns in ECMAScript/JavaScript code, enhancing code consistency and preventing bugs.
2. Install the WebDriverIO ESLint plugin: `npm install eslint-plugin-wdio --save-dev`.
3. Also, install ESLint: `npm i eslint --save-dev`.
4. Create a `.eslintrc` file in the root directory. Refer to the [eslint-plugin-wdio package](https://www.npmjs.com/package/eslint-plugin-wdio) for configuration details.

### Optimize Framework
1. In the root directory, create two files: `wdio.ios.conf.js` and `wdio.android.conf.js`.
2. Create a `config` folder in the root directory.
3. Move both configuration files into the `config` folder.
4. Execute the configuration for iOS: `npx wdio config/wdio.ios.conf.js`.

### BrowserStack Integration
1. Visit [BrowserStack App Automate](https://app-automate.browserstack.com/dashboard/v2/getting-started) and upload your app. Copy the app URL, e.g., `bs://65eb3e273669793eec79c320162f3871848ab759`.
2. Record your BrowserStack access key details.
3. Install the BrowserStack service as per WebDriverIO's [BrowserStack service documentation](https://webdriver.io/docs/browserstack-service/).
4. Run: `npm install @wdio/browserstack-service --save-dev`.
5. In the `config` directory, create a new BrowserStack configuration file: `wdio.android.bs.conf`.
6. Update `wdio.android.bs.conf` with the BrowserStack path to the app URL.
7. Edit `wdio.shared.conf` to update configurations.
8. Remove `services: ['appium']` from the configuration.
9. For capability settings, consult [BrowserStack Capabilities](https://www.browserstack.com/app-automate/capabilities).
10. Access test results at [BrowserStack Observability](https://observability.browserstack.com/projects/).
11. For all tests and videos, visit [BrowserStack Dashboard](https://app-automate.browserstack.com/dashboard/).
12. Install dotenv for credential management: `npm install dotenv`.
13. Add `require('dotenv').config()` at the top of the `wdio.android.bs.conf` file.
14. Create a `.env` file in the home directory and include BrowserStack credentials:
15. Run app live https://www.browserstack.com/docs/app-live/session-debugging/appium-inspector
    ```
    BROWSERSTACK_USER = xxxxxxxx
    BROWSERSTACK_KEY = xxxxxxx
    ```
# Webview
1. To get contexts
2. On appium inspector, click command > context > context > getContexts
3. If bromedriver is not working then run `appium --allow-insecure chromedriver_autodownload`
[
  "NATIVE_APP",
  "WEBVIEW_chrome"
]

## Allure reporting
1. Allure reporting
2. https://webdriver.io/docs/allure-reporter/ 
3. Install allure reporter using ``
4. Autogenerate Report ` npm i allure-commandline --save-dev`
5. to generate result use `npx allure generate allure-results && npx allure open`

## File structure

- Root
  - .github
    - workflows
  - app
    - android
    - ios
  - config
    - wdio.android.bs.conf.js
    - wdio.android.conf.js
    - wdio.ios.conf.js
    - wdio.shared.conf.js
  - test
    - data
    - screenObjects
      - android
      - ios
    - specs
      - android
      - ios
    - utils
  - .env
  - .eslintrc
  - .gitignore
  - babel.config.js
  - jsconfig.json
  - package-lock.json
  - package.json


  ## Run Test
- Clone repo
- npm install - to install all dependencies
- Start appium server - Start Appium Inspector from the command line: `appium -p 4724`.
- Run Test Locally - From the command line run: `npx wdio config/wdio.android.conf.js`
- Run Test in browserstack- From the command line run: `npx wdio config/wdio.android.bs.conf.js`

