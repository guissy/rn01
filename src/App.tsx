import * as React from 'react';
import { NavigationScreenConfigProps } from 'react-navigation';
import { StyleProvider, } from 'native-base';
import getTheme from './native-base-theme/components/index';
import platform from './native-base-theme/variables/platform';
import Home from './pages/Home';

interface Props extends NavigationScreenConfigProps {
}


export default class App extends React.Component<Props> {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Home />
      </StyleProvider>
    );
  }
}