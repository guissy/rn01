import * as React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Title,
  connectStyle,
  View,
} from 'native-base';
import platform from '../../native-base-theme/variables/platform';

interface Hoc {
  style: typeof platform;
}

interface Props extends Partial<Hoc> {

}

/** Aside */
@connectStyle('variables')
export default class Aside extends React.PureComponent<Props, {}> {

  state = {};

  render(): React.ReactNode {
    const { style } = this.props as Hoc;
    return (
      <Container
        style={{ backgroundColor: '#fff' }}
      >
        <Content>
          <List style={{backgroundColor: style.brandPrimary}}>
            <ListItem>
              <Thumbnail source={require('../../images/app_ic.jpg')} size={80}/>
              <Body>
              <Text>桂子鼠鼠</Text>
              </Body>
            </ListItem>
          </List>
          <List>
            <ListItem>
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
        <Footer style={{ backgroundColor: '#fff' }}>
          <FooterTab>
            <Button full transparent style={styles.switchDeviceBtn}>
              <Icon name="american-sign-language-interpreting" type="FontAwesome" style={styles.switchDeviceIco} />
              <Text style={styles.switchDeviceTxt}>切换设备</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  switchDeviceBtn: {
    margin: 0,
    flexDirection: 'row',
    overflow: 'visible'
  },
  switchDeviceIco: {
  },
  switchDeviceTxt: {
    fontSize: 20,
    lineHeight: 52,
  },
});