import * as React from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title, View } from 'native-base';
import {
  StyleSheet,
  Image
} from 'react-native';
import * as Swiper from 'react-native-swiper';


interface Hoc {
}

interface Props extends Partial<Hoc> {
  screenProps: {
    openDrawer: () => void;
  }
}

/** Acticle */
export default class Article extends React.PureComponent<Props, {}> {

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
          <Swiper
            style={styles.swiper}
            height={200}
            horizontal={true}
            paginationStyle={{ bottom: 10 }}
            showsButtons={false}
          >
            <Image source={require('../../images/slider/a.jpg')} style={styles.img}/>
            <Image source={require('../../images/slider/b.jpg')} style={styles.img}/>
            <Image source={require('../../images/slider/c.jpg')} style={styles.img}/>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

const Dimensions = require('Dimensions');
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  swiper: {},
  img: {
    width: width,
    height: 200,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});