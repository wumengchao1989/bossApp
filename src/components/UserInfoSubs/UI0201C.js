import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {List, SwipeAction} from 'antd-mobile-rn';
import {connect} from "dva-no-router";
import img from "../../assets/img.jpg";

const Item = List.Item;

class UI0201C extends React.Component<any, any> {
    static navigationOptions = ({navigation}) => {
        return {
            title: '联系人信息',
            headerRight: (
                <Text onPress={() => navigation.navigate('UI0202', {ifEdit: false})}
                      style={{marginLeft: 5}}>新增联系人</Text>
            ),
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            company_id: ""
        };
    }

    componentDidMount() {
        this.get_company_contact();

    }

    get_company_contact = () => {
        storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
                someFlag: true,
            },
        }).then(ret => {
            this.props.dispatch({
                type: "ui0201Info/get_company_contact",
                payload: {
                    company_id: ret.companyId,
                }
            });
            this.setState({
                company_id: ret.companyId
            })
        })
    };


    render() {
        let vm = this;
        const right = [
            {
                text: '编辑',
                onPress: () => {
                    this.props.navigation.navigate("UI0202", {ifEdit: true,})

                },
                style: {backgroundColor: 'orange', color: 'white'},
            },
            {
                text: '删除',
                onPress: () => {

                },
                style: {backgroundColor: 'red', color: 'white'},
            },
        ];
        const {companyContacts} = this.props.ui0201Info;
        return (
            <View>
                <View style={{
                    zIndex: 1,
                    position: "absolute",
                    justifyContent: 'center',
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Text style={{textAlign: "center", flex: 1}}>松开刷新...</Text>
                </View>
                <ScrollView onScrollEndDrag={this.get_company_contact} style={{zIndex: 22}}>
                    <List>
                        {companyContacts.map((item, index) => {
                            return <SwipeAction
                                autoClose
                                right={right}
                                onOpen={(id,rowId) => console.log('open',rowId)}
                                onClose={(id,rowId) => {
                                    console.log('close急急急', rowId)
                                }}
                                rowId={index}
                                key={index}
                                close={this.state.close}
                            >
                                <View style={styles.listItem} key={index}>
                                    <View style={styles.avatar}>
                                        <Image source={img} style={styles.img}/>
                                    </View>
                                    <View style={styles.contactInfo}>
                                        <Text style={styles.name}>{item.name || "未知"}</Text>
                                        <Text style={styles.email}>{item.mail || "未知"}</Text>
                                        <Text style={styles.tel}>{item.tel || "未知"}</Text>
                                    </View>
                                    <View style={styles.occupation}>
                                        <Text style={styles.occupationTitle}>{item.title || "未知"}</Text>
                                    </View>
                                </View>
                            </SwipeAction>
                        })}
                    </List>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        height: 90,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginBottom: 1
    },
    contactInfo: {
        flex: 2 / 4,
        paddingTop: 20
    },
    name: {
        fontSize: 16,
    },
    email: {
        fontSize: 12,
    },
    tel: {
        fontSize: 12
    },
    occupation: {
        flex: 1 / 4,
        paddingTop: 20,

    },
    occupationTitle: {
        fontSize: 20
    },
    avatar: {
        flex: 2 / 9,
        marginTop: 5,

    },
    img: {
        width: 70,
        borderRadius: 35,
        height: 70
    },
});


function mapDispatchToProps({ui0201Info}) {
    return {ui0201Info};
}


export default connect(mapDispatchToProps)(UI0201C);