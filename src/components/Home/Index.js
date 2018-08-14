//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
//  example row data (see for json structure)

//  example styles


import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ListView, Text, View, TouchableWithoutFeedback} from 'react-native';
import rows from './data';
//  example swipout app
class Home extends Component {

    constructor() {
        super();

        //  datasource rerendered when change is made (used to set swipeout to active)
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});

        this.state = {
            dataSource: ds.cloneWithRows(rows),
            sectionID: null,
            rowID: null,
        };
    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {
        return (
            <Swipeout
                close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
                left={rowData.left}
                right={rowData.right}
                rowID={rowID}
                sectionID={sectionID}
                autoClose={rowData.autoClose}
                backgroundColor={rowData.backgroundColor}
                onOpen={(sectionID, rowID) => {
                    this.setState({
                        sectionID,
                        rowID,
                    })
                }}
                onClose={() => console.log('===close') }
                scroll={event => console.log('scroll event') }
            >
                <TouchableWithoutFeedback onPress={() => console.log('press children')}>
                    <View >
                        <Text>{rowData.text}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Swipeout>
        );
    }

    render() {
        return (
            <View >
                <View />
                <View ><Text>Swipeout</Text></View>
                <ListView
                    scrollEnabled
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        );
    }

}

export default Home;