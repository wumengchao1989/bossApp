import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {List, SwipeAction} from 'antd-mobile-rn';
import {connect} from "dva-no-router";

const Item = List.Item;

class UI0201C extends React.Component<any, any> {
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
        const right = [
            {
                text: '编辑',
                onPress: () => console.log('more'),
                style: {backgroundColor: 'orange', color: 'white'},
            },
            {
                text: '删除',
                onPress: () => console.log('delete'),
                style: {backgroundColor: 'red', color: 'white'},
            },
        ];
        const {companyContacts} = this.props.ui0201Info;
        return (
            <View>
                <View style={{zIndex: 1,position:"absolute",justifyContent: 'center',alignItems: "center",flexDirection: "row"}}>
                    <Text style={{textAlign:"center",flex:1}}>松开刷新...</Text>
                </View>
                <ScrollView onScrollEndDrag={this.get_company_contact} style={{zIndex: 22}}>
                    <List >
                        {companyContacts.map((item) => {
                            return <SwipeAction
                                autoClose
                                right={right}
                                onOpen={() => console.log('open')}
                                onClose={() => console.log('close')}
                            >
                                <View style={styles.listItem}>
                                    <View style={styles.avatar}>

                                    </View>
                                    <View style={styles.contactInfo}>
                                        <Text style={styles.name}>{item.name || "未知"}</Text>
                                        <Text style={styles.email}>{item.mail || "未知"}</Text>
                                        <Text style={styles.tel}>{item.tel || "未知"}</Text>
                                    </View>
                                    <View style={styles.occupation}>
                                        <Text style={styles.occupationTitle}>{item.title}</Text>
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
        flex: 1 / 4,
    }
});


function mapDispatchToProps({ui0201Info}) {
    return {ui0201Info};
}


export default connect(mapDispatchToProps)(UI0201C);