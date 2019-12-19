# chatify

Chatify is a little react-native app I made for a job interview code challenge. It took about 3.5 hours to make. The goal was to create a basic [chat fiction](https://techcrunch.com/2017/06/13/the-chat-fiction-apps-that-teens-go-crazy-for/) app.

The app fetches a conversation from an external API, and displays the messages in the form of a chat. The user can progress the conversation by tapping the bottom part of the screen, or go back by tapping the top part.

<p align="center">
  <img src="https://i.imgur.com/313oTW0.gif">
</p>

## Why Expo?

- I work on Linux, so I can only build for Android, but the challenge is reviewed on iOS. By using Expo I'm able to test the app on my iPhone without Xcode
- By using Expo I'm eliminating a lot of boilerplate code, which reduces my development time and makes code review easier

## Installation

Install the dependencies:

```
$ yarn
```

If not already installed, install `expo-cli`:

```
$ yarn add global expo-cli
```

Run the tests:

```
$ yarn test
```

## Running on physical device

Start the bundler:

```
$ yarn start
```

Download the Expo app on your phone, and enter the outputted URL.

## Running on virtual device

iOS Simulator:

```
$ yarn ios
```

Android Emulator:

```
$ yarn android
```
