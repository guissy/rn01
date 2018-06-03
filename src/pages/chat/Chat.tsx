import * as React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Title, View, } from 'native-base';

interface Hoc {
}

interface Props extends Partial<Hoc> {
  screenProps: {
    openDrawer: () => void;
  }
}

/** Chat */
export default class Chat extends React.PureComponent<Props, {}> {

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
          <Image source={require('../../images/videobg.jpg')} style={styles.videobg}/>
          <List>
            <ListItem itemHeader first>
              <Text>宝宝动态</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


const Dimensions = require('Dimensions');
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  videobg: {
    width: width,
    height: 240,
    // resizeMode: Image.resizeMode.stretch
  },
});