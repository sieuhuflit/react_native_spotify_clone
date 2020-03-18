# React Native Project Nektar-AI

## Table of Contents

- [Demo](#demo)
- [Feature](#feature)
- [Improvement](#improvement)
- [Folder structure](#folder-structure)
- [Install](#install)

## Demo

![Gif demo](./demo.gif)

## Feature

- 🌟 Using react navigation
- ⭐️ Create 3 screen : HomeScreen, AlbumScreen, ModalMusicPlayer
- 🌟 Unit test with Jest + Enzyme (Coverage about 70%)

## Improvement

Because I don't have so much time on this project, so here is some note I will do it if have enough time.

- 💥 Add responsive width height to fit all screen
- 💥 Add Skeleton effect to loading
- 💥 Integrate with CI/CD
- 💥 Add integration test

## Folder structure

    .
    ├── ...
    ├── src
    │   ├── api                                 # Calling API
    │   ├── assets                              # Application assets
    │   ├── components
    │   │   ├── ...
    │   │   ├── TouchText
    │   │   │     ├── TouchText.js              # Component
    │   │   │     └── TouchText.test.js         # Unit test for component
    │   │   └── ...
    │   │
    │   ├── data                                # All redux stuff
    │   │   ├── auth
    │   │   └── ...
    │   │       ├── actions.js                  # redux action
    │   │       ├── reducer.js                  # Reducer
    │   │       ├── selectors.js                # Selector
    │   │       └── types.js                    # Action types
    │   │
    │   ├── screens                             # Screren in application
    │   │   └── ...
    │   │
    │   └── navigations
    │       ├── AppNavigation.js                # Main App Navigations
    │       └── screnNames.js                   # Define constants screenNames
    │
    └── ...

## Install

Clone the git repo and install dependencies.

```
npm i

// or

yarn install

// And then install pod

cd ios

pod install
```

You can then run following scripts for local development

```
yarn ios              // Run on iOS

yarn android          // Run on Android

yarn test             // Test your changes

yarn test:watch       // Run test and watching

yarn test:coverage    // Run test and then export coverage
```
