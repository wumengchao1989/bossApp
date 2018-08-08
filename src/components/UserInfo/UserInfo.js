/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import img from '../../assets/img.jpg';
import {Button} from 'antd-mobile-rn'
import Icon from "react-native-vector-icons/FontAwesome";
import {connect} from "dva-no-router";

class UserInfo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            role: "",
            ifLogin: false,
        };
    }

    componentDidMount() {
        let vm = this;
        storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
                someFlag: true,
            },
        }).then(ret => {
            let role = "";
            switch (ret.role) {
                case "supercxpadmin":
                    role = "管理员";
                    break;
                case "supercxptechnology":
                    role = "运维";
                    break;
                case "supercxpbusiness":
                    role = "商务";
                    break;
                case "supercxptechsupport":
                    role = "技术支持";
                    break;
                case "company":
                    role = "客户";
                    break;
                case "supercxpbizadmin":
                    role = "商务主管";
                    break;
                case "supercxptechadmin":
                    role = "技术支持主管";
                    break;
                default:
                    role = ret.role;
                    break;
            }
            vm.props.dispatch({
                type: "model/setUserInfo",
                payload: {
                    role: role,
                    ifLogin: ret.ifLogin,
                    username: ret.username
                }
            })
        })

    }

    handleLogin = () => {
        this.props.navigation.navigate("Login")
    };

    handleGoToNextPage = (path) => {
        this.props.navigation.navigate(path)
    };

    render() {
        const menuList = [{
            name: "基本信息",
            icon: "book",
            color: "#1e88e4",
            path: "UI0101"
        }, {
            name: "联系人信息",
            icon: "user",
            color: "#ff9601",
            hasMargin: true,
            path: "UI0201"
        }, {
            name: "合同信息",
            icon: "file",
            color: "#00acbf",
            path: "UI0101"
        }, {
            name: "账期清单",
            icon: "credit-card",
            color: "#4cd964",
            hasMargin: true,
            path: "UI0101"
        }, {
            name: "秘钥信息",
            icon: "key",
            color: "#fe2c58",
            path: "UI0101"
        }, {
            name: "设置",
            icon: "gear",
            color: "#8c9efd",
            path: "UI0101"
        },];
        return (
            <View style={styles.container}>
                <View style={styles.userInfoHeader}>

                    <View style={styles.userImg}>
                        <Image source={img} style={styles.img}/>
                    </View>
                    <View style={styles.userInfo}>
                        {this.props.model.ifLogin ? <Text style={styles.userNm}>用户名:{this.props.model.username}</Text> :
                            <Text style={{fontSize: 18, color: "#fff", marginTop: 14}}>尚未登录,请登录</Text>}
                        {this.props.model.ifLogin ? <Text style={styles.userRole}>用户角色:{this.props.model.role}</Text> :
                            <Button style={styles.loginBtn} onClick={() => this.handleLogin()}>登录</Button>}
                    </View>
                </View>
                {
                    menuList.map((item) => {
                        return <TouchableHighlight onPress={() => this.handleGoToNextPage(item.path)}
                                                   style={[styles.itemList, {marginBottom: item.hasMargin ? 10 : 2,}]}
                                                   underlayColor="#e8e8e8">
                            <View style={{flex: 1, flexDirection: "row"}}>
                                <View style={styles.itemTextContainer}>
                                    <View style={styles.itemIcon}>
                                        <Icon name={item.icon}
                                              style={{fontSize: 24, color: item.color, textAlign: "left"}}/>
                                    </View>
                                    <View style={styles.itemText}>
                                        <Text>{item.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.arrowContainer}>
                                    <Icon style={styles.arrow} name="angle-right"/>
                                </View>
                            </View>
                        </TouchableHighlight>
                    })
                }
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    userInfoHeader: {
        flex: 1 / 5,
        flexDirection: "row",
        backgroundColor: "#4c81e1",
        justifyContent: "center"
    },
    userImg: {
        flex: 1 / 5,
        paddingTop: 20,
        justifyContent: "center",
    },
    userInfo: {
        flex: 3 / 5,
        justifyContent: "center",
    },
    img: {
        width: 75,
        borderRadius: 37,
        height: 75
    },
    loginBtn: {
        height: 30,
    },
    userNm: {
        color: "#fff",
        fontSize: 16,
        marginTop: 12
    },
    userRole: {
        color: "#fff",
        fontSize: 12,
        marginTop: 12
    },
    itemList: {
        flex: 1 / 12,
        backgroundColor: "#fff",
        flexDirection: "row"
    },
    itemIcon: {
        fontSize: 16,
        justifyContent: "center",
        width: 40,
        marginLeft: 20
    },
    itemText: {
        fontSize: 16,
        justifyContent: "center",
    },
    itemTextContainer: {
        flex: 11 / 12,
        flexDirection: "row",
    },
    arrow: {
        fontSize: 24,
        color: "#ddd",
    },
    arrowContainer: {
        flex: 1 / 12,
        justifyContent: "center",
    }
});


function mapDispatchToProps({userInfo, model}) {
    return {userInfo, model};
}


export default connect(mapDispatchToProps)(UserInfo);

