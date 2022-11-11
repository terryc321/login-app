

import React from 'react';
import './config/firebase';
import RootNavigation from './navigation/RootNavigation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();

// hopefully this signs me out ! on startup
auth.signOut();

export default function App() {
  return (
    <RootNavigation />
  );
}

