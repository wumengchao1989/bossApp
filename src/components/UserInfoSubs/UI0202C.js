/**
 * 新增联系人
 **/

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,ScrollView} from 'react-native';
import {List,InputItem,Button} from 'antd-mobile-rn';
import {connect} from 'dva-no-router';

const Item = List.Item;
const Brief = Item.Brief;

class UI0202C extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            company_id:""
        };
    }

    componentDidMount() {

    }

    create_company_contact=()=>{
        this.props.dispatch({
            type:"ui0201Info/create_company_contact",
            payload:{

            }
        })
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <InputItem disabled  arrow="horizontal">
                        姓名
                    </InputItem>
                    <InputItem disabled  arrow="horizontal">
                        职务
                    </InputItem>
                    <InputItem  arrow="empty">
                        联系电话
                    </InputItem>
                    <InputItem arrow="empty">
                        电子邮箱
                    </InputItem>
                    <InputItem  arrow="empty">
                        联系地址
                    </InputItem>
                    <InputItem  arrow="empty">
                        备注
                    </InputItem>
                </List>
                <Button style={styles.btn} onClick={this.create_company_contact}>{params.ifEdit?"编辑":"新增"}联系人</Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn:{
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10
    }
});

function mapDispatchToProps({ui0201Info}) {
    return {ui0201Info};
}


export default connect(mapDispatchToProps)(UI0202C);


