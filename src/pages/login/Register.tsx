import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Title, Toast,
  View
} from 'native-base';
import {
  StyleSheet,
  Image, Text
} from 'react-native';
import { NavigationScreenConfigProps } from 'react-navigation';

interface Hoc extends NavigationScreenConfigProps {
}

interface Props extends Partial<Hoc> {

}

/** Login */
export default class Login extends React.PureComponent<Props, {}> {

  state = {
    mobile: '',
    password: '',
    code: ''
  };

  render(): React.ReactNode {
    const { navigation } = this.props as Hoc;
    return (
      <Container>
        <Header>
          <Title style={styles.title}>注册</Title>
        </Header>
        <Content style={styles.content}>
          <Form>
            <Item floatingLabel success={this.state.mobile.length === 11}>
              <Input
                placeholder="手机号"
                value={this.state.mobile}
                onChangeText={(mobile) => {
                  this.setState({ mobile });
                }}
              />
            </Item>
            <Item floatingLabel last success={this.state.password.length >= 6}>
              <Input
                placeholder="密码"
                value={this.state.password}
                onChangeText={(password) => {
                  this.setState({ password });
                }}
              />
            </Item>
            <Item floatingLabel last success={this.state.code.length >= 4}>
              <Input
                placeholder="验证码"
                value={this.state.code}
                onChangeText={(code) => {
                  this.setState({ code });
                }}
              />
            </Item>
            <View style={styles.center} padder>
              <Button
                rounded
                style={styles.submit}
                onPress={() =>
                  navigation.navigate('Home')
                }
              >
                <Text style={styles.submitTxt}>注册</Text>
              </Button>
            </View>
          </Form>
        </Content>

      </Container>
    );
  }
}

const Dimensions = require('Dimensions');
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  content: {
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    lineHeight: 52,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  submit: {
    flex: 1,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },
  submitTxt: {
    color: '#fff',
    fontSize: 20
  }
});