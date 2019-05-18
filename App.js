/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView,FlatList,Dimensions} from 'react-native';
import { Card } from 'react-native-material-cards'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state= {
      index: 0,
      stringList:[
        {"value":"The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data,"},
        {"value":"where the number of items might change over time. Unlike the more generic ScrollView"},
        {"value":" the FlatList only renders elements that are currently showing on the screen, not all the elements at once"},
        {"value":"The FlatList component requires two props: data and renderItem. data is the source of information for the list"},
        {"value":"The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data,"},
        {"value":"where the number of items might change over time. Unlike the more generic ScrollView"},
        {"value":" the FlatList only renders elements that are currently showing on the screen, not all the elements at once"},
        {"value":"The FlatList component requires two props: data and renderItem. data is the source of information for the list"}],

      array:[{"label":"1","value":"0.04"},
            {"label":"1","value":"0.05"},
            {"label":"1","value":"0.06"},
            {"label":"1","value":"0.07"},
            {"label":"1","value":"0.04"},
            {"label":"1","value":"0.05"},
            {"label":"1","value":"0.06"},
            {"label":"1","value":"0.07"}],
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
      ],
    }
  }
  renderFlatListItem =({item,index})=>{
    return (
        <Card style={{padding:5,borderWidth:0.3,borderColor: "grey",borderRadius:5}}>
          <Text style={{fontSize:13}}>{item.value}</Text>
        </Card>
    )
  }
  renderListViewItem =(item,index)=>{
    return (
        <Card style={{justifyContent: 'center',alignItems: 'center', flex:0,height:50,width:50, padding:5,borderWidth:0.3,borderColor: "grey",borderRadius:5}}>
          <Text style={{fontSize:13}}>{item.value}</Text>
        </Card>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1,padding:10}}>
          <Text style={{textAlign:"center"}}>Vertical ListView</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.stringList}
            extraData={this.state}
            renderItem={this.renderFlatListItem}
          />

        </View>
        <View style={{flex: 1,padding:10}}>
          <Text style={{textAlign:"center"}} >Horizontal ListView</Text>
          <ListView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            dataSource={ds.cloneWithRows(this.state.array)}
            renderRow={this.renderListViewItem}
          />
        </View>

        <View style={{flex: 1,padding:10}}>
         <Card style={{
           borderBottomWidth: 5,
           borderBottomColor:"green",
           padding:5,
           borderWidth:0.3,
           borderColor: "grey",
           justifyContent: 'center',
           alignItems:"center",
           borderRadius:5}}>
           <View style={{flexDirection:"row",padding:5}}>
              <Text>$</Text>
              <Text>1500</Text>
              <Text>.00</Text>
           </View>
           <View style={{flexDirection:"row",padding:5}}>
              <Text>$</Text>
              <Text>1500</Text>
              <Text>.00</Text>
           </View>
           <View style={{flexDirection:"row",padding:5}}>
              <Text>$</Text>
              <Text>1500</Text>
              <Text>.00</Text>
           </View>
         </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
