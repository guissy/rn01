import * as React from 'react';
import { Easing, StyleSheet } from 'react-native';
import { createStackNavigator, NavigationScreenConfigProps, withNavigation, createSwitchNavigator } from 'react-navigation';
import { Button, Container, Content, Drawer, Footer, FooterTab, Icon, Text, } from 'native-base';
import Aside from '../pages/aside/Aside';
import Chat from './chat/Chat';
import Profile from './profile/Profile';
import Article from './article/Article';

interface Hoc extends NavigationScreenConfigProps {
}

interface Props extends Partial<Hoc> {

}

const Screen = createStackNavigator(
  {
    Article: { screen: Article, },
    Chat: { screen: Chat, },
    Profile: { screen: Profile, },
  },
  {
    initialRouteName: 'Chat',
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
    const routeName = this.state.routeName;
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
            {routeName === 'Article' && <Article openDrawer={this.openDrawer}/>}
            {routeName === 'Chat' && <Chat openDrawer={this.openDrawer}/>}
            {routeName === 'Profile' && <Profile openDrawer={this.openDrawer}/>}
          </Content>
          <Footer style={styles.footer}>
            <FooterTab>
              <Button
                vertical
                active={routeName === 'Article'}
                onPress={() => {
                  // navigation.navigate('Home/Article')
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
                  // navigation.navigate('Chat')
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
                  this.setState({ routeName: 'Profile' });
                  // navigation.navigate('Profile');
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

export default Home;
// export default createSwitchNavigator({
//   Home: Home, // This screen renders a navigator!
// });
