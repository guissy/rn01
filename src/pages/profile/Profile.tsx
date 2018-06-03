import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import {
  Body,
  Button,
  Container, Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title,
  View,
  FooterTab
} from 'native-base';

interface Hoc {
}

interface Props extends Partial<Hoc> {
  screenProps: {
    openDrawer: () => void;
  }
}

/** Profile */
export default class Profile extends React.PureComponent<Props, {}> {

  state = {};

  render(): React.ReactNode {
    const { openDrawer } = this.props.screenProps;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={openDrawer}
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
          <List>
            <ListItem>
              <Thumbnail large source={require('../../images/app_ic.jpg')} size={80}/>
              <Body>
              <Text>桂子鼠鼠</Text>
              </Body>
            </ListItem>
          </List>
          <FooterTab>
            <Button
              vertical
              onPress={() => {
                this.setState({ routeName: 'Article' });
              }}
            >
              <Icon
                name='lock'
                style={styles.opDeviceIco}
              />
              <Text style={styles.opDeviceBtn}>童锁</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState({ routeName: 'Chat' });
              }}
            >
              <Icon
                name='ios-headset-outline'
                type="Ionicons"
                style={styles.opDeviceIco}
              />
              <Text style={styles.opDeviceBtn}>耳灯控制</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState({ routeName: 'Profile' });
              }}
            >
              <Icon
                name='ios-alarm-outline'
                type="Ionicons"
                style={styles.opDeviceIco}
              />
              <Text style={styles.opDeviceBtn}>定时提醒</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.setState({ routeName: 'Profile' });
              }}
            >
              <Icon
                name='power'
                style={styles.opDeviceIco}
              />
              <Text style={styles.opDeviceBtn}>关机</Text>
            </Button>
          </FooterTab>
          <List style={styles.myList}>
            <ListItem icon style={styles.myListItem}>
              <Left style={styles.myListItem}>
                <Icon name="heart"/>
              </Left>
              <Body style={styles.myListItem}>
                <Text style={styles.myListTxt}>我的收藏</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.myListItem}>
              <Left style={styles.myListItem}>
                <Icon name="clock"/>
              </Left>
              <Body style={styles.myListItem}>
                <Text style={styles.myListTxt}>播放记录</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  opDeviceIco: {
    marginTop: 10,
    fontSize: 32,
    borderColor: '#DDD',
    width: 52,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 50,
    lineHeight: 52
  },
  opDeviceBtn: {
    fontSize: 16,
    lineHeight: 36
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  myList: {
    borderTopColor: '#DDD',
    borderTopWidth: 0.25,
  },
  myListItem: {
    height: 60,
  },
  myListTxt: {

  }
});