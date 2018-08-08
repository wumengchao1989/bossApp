/**
 * 我的-基本信息-修改基本信息
 * */

import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import {Button, InputItem, List} from 'antd-mobile-rn';
import {connect} from 'dva-no-router';


class UI0102C extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    componentDidMount() {

    }


    handleInputChange = (value) => {
        this.setState({
            value: value
        })
    };

    handleSubmitEdit = () => {
        const {params} = this.props.navigation.state;
        let payload={};
        payload.update = {
            id: params.id,
            company_id: params.id,
        };
        payload.navi=this.props.navigation;
        payload.update[params.type] = this.state.value;
        this.props.dispatch({
            type: "ui0101Info/update_company",
            payload: payload
        })
    };


    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <View style={styles.inputContainer}>
                    <List style={styles.inputList}>
                        <InputItem placeholder="请输入企业名称" style={styles.input} defaultValue={params.content}
                                   onChange={this.handleInputChange}/>
                    </List>
                </View>
                <View style={styles.inputContainer}>
                    <Button style={styles.btn} onClick={this.handleSubmitEdit}>确认修改</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        flexDirection: "row",

    },
    inputList: {
        flex: 9 / 10,
        marginTop: 20,
        marginBottom: 20
    },
    input: {
        borderRadius: 40
    },
    btn: {
        flex: 9 / 10,
    }

});

function mapDispatchToProps({ui0101Info}) {
    return {ui0101Info};
}


export default connect(mapDispatchToProps)(UI0102C);


