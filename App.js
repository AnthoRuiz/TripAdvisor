import React from 'react';
import {firebaseApp} from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";

import { LogBox } from 'react-native'

LogBox.ignoreAllLogs([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  'Setting a timer'
])

export default function App() {

  return ( <Navigation /> );

}