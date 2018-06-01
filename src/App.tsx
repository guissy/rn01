import * as React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import {
  StyleProvider,
  Container,
  Header,
  Title,
  Content,
  Button,
  Text,
  Left,
  Right,
  Footer,
  FooterTab,
  Body,
  Icon,
  View,
  Badge,
  Drawer,
  Thumbnail,
  List,
  ListItem,
} from 'native-base';
import getTheme from '../native-base-theme/components/index';
import platform from '../native-base-theme/variables/platform';

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
          content={(
            <Container
              style={{backgroundColor: '#fff'}}
            >
              <Content>
                <List>
                  <ListItem>
                    <Thumbnail source={require('../images/app_ic.jpg')} size={80} />
                    <Body>
                    <Text>桂子鼠鼠</Text>
                    </Body>
                  </ListItem>
                </List>
                <List>
                  <ListItem >
                    <Text>电量正常</Text>
                  </ListItem>
                  <ListItem>
                    <Text>设备音量</Text>
                  </ListItem>
                  <ListItem>
                    <Text>消息中心</Text>
                  </ListItem>
                  <ListItem>
                    <Text>成员管理</Text>
                  </ListItem>
                  <ListItem last>
                    <Text>设备管理</Text>
                  </ListItem>
                </List>
              </Content>
              <Footer style={{backgroundColor: '#fff'}}>
                <Body>
                  <Title style={styles.switchDeviceBtn}>切换设备</Title>
                </Body>
              </Footer>
            </Container>
          )}
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
                  <Icon name='arrow-back'/>
                  <Text style={styles.footerTxt}>内容云</Text>
                </Button>
                <Button vertical active>
                  <Icon name='beer' active/>
                  <Text style={styles.footerTxt}>宝宝连线</Text>
                </Button>
                <Button vertical>
                  <Icon name='cog'/>
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

// import 'react-devtools';
// import 'react-devtools-core/standalone';
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  switchDeviceBtn: {
    color: '#999',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#fff',
  },
  videobg: {
    width: width,
    height: 240,
    resizeMode: Image.resizeMode.stretch
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
