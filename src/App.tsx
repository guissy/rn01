import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Drawer,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  StyleProvider,
  Text,
  Title,
  View,
} from 'native-base';
import getTheme from '../native-base-theme/components/index';
import platform from '../native-base-theme/variables/platform';
import Aside from './pages/aside/Aside';

type Props = {};

export default class App extends React.Component<Props> {
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

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Drawer
          ref={(ref) => {if (ref) { this.drawer = ref; }}}
          content={<Aside />}
          onClose={this.closeDrawer}
        >
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.openDrawer()}
                >
                  <Icon name='menu'/>
                </Button>
              </Left>
              <Body>
                <Title style={styles.title}>未绑定设备</Title>
              </Body>
              <Right/>
            </Header>
            <Content>
              <View>
                <Image source={require('../images/videobg.jpg')} style={styles.videobg}/>
              </View>

            </Content>
            <Footer style={styles.footer}>
              <FooterTab>
                <Button vertical>
                  <Icon name='cloud'/>
                  <Text style={styles.footerTxt}>内容云</Text>
                </Button>
                <Button vertical active>
                  <Icon name='comments' active type="FontAwesome"/>
                  <Text style={styles.footerTxt}>宝宝连线</Text>
                </Button>
                <Button vertical>
                  <Icon name='user' type="FontAwesome"/>
                  {/*<Badge>*/}
                    {/*<Text>2</Text>*/}
                  {/*</Badge>*/}
                  <Text style={styles.footerTxt}>宝宝信息</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </Drawer>
      </StyleProvider>
    );
  }
}

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
  },
  videobg: {
    width: width,
    height: 240,
    // resizeMode: Image.resizeMode.stretch
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  footerTxt: {
    // fontSize: 14,
    // textAlign: 'center',
    // marginBottom: 5,
  },
});
