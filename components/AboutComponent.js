import React, { Component } from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import { PARTNERS } from '../shared/partners';
import {Card,ListItem} from 'react-native-elements';

function Mission(){
    return (
        <Card title='Our Mission'>
            <Text style={{margin:10}}>We preset a curated database of the best campsites in teh vast woods and backcountry of the World Wide Web Wilderness.
             We increase access to adventure for the public while promoting safe and respectful use of resources.The expert wilderness trekkers I dont know how this import 
             thing is making any sense. So we excel sheet our way up to the pot top.</Text>

        </Card>
    )
}
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            partners:PARTNERS
           
        }
    }

    static navigationOptions={
        title: 'About Us'
    }
    render(){
const renderPartner =({item}) =>{
       
        return(
            <ListItem 
            title={item.name}
            subtitle={item.description}
            leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
            />
        )
    }
    
    return(
<ScrollView><Mission>
    </Mission>
    
    <Card title='Community Partners'>
        <FlatList
        data={this.state.partners}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPartner}></FlatList>
        </Card></ScrollView>    
)
}
}
export default About;