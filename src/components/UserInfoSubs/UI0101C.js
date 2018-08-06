/**
* 我的-基本信息
* */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,ScrollView} from 'react-native';
import {List} from 'antd-mobile-rn';
import {connect} from 'dva-no-router';

const Item = List.Item;
const Brief = Item.Brief;

class UI0101C extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }


    render() {

        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <Item disabled extra="箭头向右" arrow="horizontal" onClick={() => {}}>
                        企业名称
                    </Item>
                    <Item disabled extra="箭头向右" arrow="horizontal" onClick={() => {}}>
                        简称
                    </Item>
                    <Item extra="没有箭头" arrow="empty">
                        状态
                    </Item>
                    <Item extra="没有箭头" arrow="empty">
                        企业管理员账号
                    </Item>
                    <Item extra="没有箭头" arrow="empty">
                        技术支持
                    </Item>
                    <Item extra="没有箭头" arrow="empty">
                        商务
                    </Item>
                </List>
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
});

function mapDispatchToProps({ui0101Info}) {
    return {ui0101Info};
}


export default connect(mapDispatchToProps)(UI0101C);


