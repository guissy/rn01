import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createSwitchNavigator, NavigationScreenConfigProps } from 'react-navigation';
import { Button, Container, Content, Drawer, Footer, FooterTab, Icon, Text, } from 'native-base';
import Aside from '../pages/aside/Aside';
import Chat from './chat/Chat';
import Profile from './profile/Profile';
import Article from './article/Article';
import Login from './login/Login';

interface Hoc extends NavigationScreenConfigProps {
}

interface Props extends Partial<Hoc> {

}

const Screen = createSwitchNavigator(
  {
    Article,
    Chat,
    Profile,
  },
  {
    initialRouteName: 'Article',
    // headerMode: 'none',
    // mode: 'modal',
    // navigationOptions: {
    //   header: null,
    // },
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 0,
    //     easing: Easing.linear,
    //   },
    //   isModal: false,
    // })
  },
);

/** Home */
class Home extends React.Component<Props, {}> {
  static router = Screen.router;
  state = {
    routeName: 'Chat'
  };

  drawer: Drawer & { _root?: any } | undefined;

  closeDrawer = () => {
    if (this.drawer) {
      this.drawer._root.close()
    }
  };

  openDrawer = () => {
    if (this.drawer) {
      this.drawer._root.open();
    }
  };

  render(): React.ReactNode {
    const { navigation } = this.props as Hoc;
    const routeName = this.state.routeName;
    console.log('☞☞☞ 9527 Home 73', this.props);
    return (
      <Drawer
        ref={(ref) => {
          if (ref) {
            this.drawer = ref;
          }
        }}
        content={<Aside/>}
        onClose={this.closeDrawer}
      >
        <Container>
          <Content>
            <Screen navigation={navigation} screenProps={{ openDrawer: this.openDrawer }}/>
          </Content>
          <Footer style={styles.footer}>
            <FooterTab>
              <Button
                vertical
                active={routeName === 'Article'}
                onPress={() => {
                  navigation.navigate('Article')
                  this.setState({ routeName: 'Article' });
                }}
              >
                <Icon
                  name='cloud'
                  active={routeName === 'Article'}
                />
                <Text>内容云</Text>
              </Button>
              <Button
                vertical
                active={routeName === 'Chat'}
                onPress={() => {
                  navigation.navigate('Chat')
                  this.setState({ routeName: 'Chat' });
                }}
              >
                <Icon
                  name='comments'
                  active={routeName === 'Chat'}
                  type="FontAwesome"
                />
                <Text>宝宝连线</Text>
              </Button>
              <Button
                vertical
                active={routeName === 'Profile'}
                onPress={() => {
                  navigation.navigate('Profile');
                  this.setState({ routeName: 'Profile' });
                }}
              >
                <Icon
                  name='user'
                  active={routeName === 'Profile'}
                  type="FontAwesome"
                />
                {/*<Badge>*/}
                {/*<Text>2</Text>*/}
                {/*</Badge>*/}
                <Text>宝宝信息</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Drawer>
    );
  }
}


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
  },
});

// export default Home;
export default createSwitchNavigator({
    Home,
    Login,
  },
  {
    initialRouteName: 'Login'
  }
);
// export default createNavigationContainer(Home);
