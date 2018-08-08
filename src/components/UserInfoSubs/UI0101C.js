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
            company_id:""
        };
    }

    componentDidMount() {
        this.get_company_list();
    }

    get_company_list=()=>{
        storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
                someFlag: true,
            },
        }).then(ret => {
            this.props.dispatch({
                type:"ui0101Info/get_company_list",
                payload:{
                    company_id:ret.companyId,
                }
            });
            this.setState({
                company_id:ret.companyId
            })
        })
    };
    handleGoToNextPage=(content,type)=>{
        this.props.navigation.navigate("UI0102",{content:content,id:this.state.company_id,type:type})
    };

    render() {
        const {company_info}=this.props.ui0101Info;
        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <Item disabled extra={company_info.company} arrow="horizontal" onClick={()=>this.handleGoToNextPage(company_info.company,"company")}>
                        企业名称
                    </Item>
                    <Item disabled extra={company_info.company_abbr} arrow="horizontal" onClick={()=>this.handleGoToNextPage(company_info.company_abbr,"company_abbr")}>
                        简称
                    </Item>
                    <Item extra={company_info.status} arrow="empty">
                        状态
                    </Item>
                    <Item extra={company_info.company_admin} arrow="empty">
                        企业管理员账号
                    </Item>
                    <Item extra={company_info.techsupport} arrow="empty">
                        技术支持
                    </Item>
                    <Item extra={company_info.business} arrow="empty">
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


