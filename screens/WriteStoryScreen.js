import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = ()=>{
    console.log(db.collection("story"))
    db.collection('story').add({
      title:this.state.title,
      author:this.state.author,
      storyText:this.state.storyText,
    })

    //alert('Story Saved!')

    this.setState({
      title:'',
      author:'',
      storyText:''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.titleBox}
            placeholder="Story Title"
            onChangeText={(text) => {
              this.setState({title: text });
            }}
            value={this.state.text}
          />

          <TextInput
            style={styles.authorBox}
            placeholder="Author"
            onChangeText={(text) => {
              this.setState({author: text });
            }}
            value={this.state.text}
          />

          <TextInput
            style={styles.storyBox}
            placeholder="Write Your Story"
            onChangeText={(text) => {
              this.setState({storyText: text });
            }}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.submitStory}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBox: {
    marginTop: 10,
    width: 300,
    height: 40,
    borderWidth: 3,
    backgroundColor: '#FFFAFA',
  },
  authorBox: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderWidth: 3,
    backgroundColor: '#FFFAFA',
  },
  storyBox: {
    marginTop: 40,
    width: 300,
    height: 100,
    alignSelf: 'left',
    textAlign: 'justify',
    borderWidth: 3,
    outline: 'none',
    backgroundColor: '#F0FFFF',
  },
  inputView: {
    margin: 20,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#F2C2D1',
  },
});
