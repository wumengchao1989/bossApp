import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, InputItem, List} from 'antd-mobile-rn';
import {connect} from 'dva-no-router';


class Login extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            userNm: "",
            password: "",
        };
    }

    componentDidMount() {

    }

    login = () => {
        this.props.dispatch({
            type: "model/login",
            payload: {
                username: this.state.userNm,
                password: this.state.password,
            }
        })
    };

    handleChangeUserNm = (value) => {
        this.setState({
            userNm:value
        })
    };

    handleChangePassword = (value) => {
        this.setState({
            password:value
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <List style={styles.list} renderHeader={() => 'SD-WAN综合管理平台'}>
                    <InputItem style={styles.input} placeholder="请输入用户名"
                               onChange={(value) => this.handleChangeUserNm(value)}>用户名</InputItem>
                    <InputItem style={styles.input} type="password" placeholder="请输入密码"
                               onChange={(value) => this.handleChangePassword(value)}>密码</InputItem>
                    <Button style={styles.button} onClick={() => this.login()}>登录</Button>
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#F5FCFF',


    },
    list: {
        flexDirection: 'column',
        marginTop: 200,
        marginLeft: 30,
        marginRight: 30,
    },
    input: {},
    button: {
        marginTop: 16,
    }
});


function mapDispatchToProps({model}) {
    return {model};
}

const LoginC = connect(mapDispatchToProps)(Login);

export default LoginC
