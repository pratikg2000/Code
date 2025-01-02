// import {StatusBar, StyleSheet} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import StackNavigation from './src/navigation/StackNavigation';

// const App = () => {
//   return (
//     <StatusBar>
//       <NavigationContainer>
//         <StackNavigation />
//       </NavigationContainer>
//     </StatusBar>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="white"
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
