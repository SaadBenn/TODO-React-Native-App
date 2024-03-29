import React from 'react';
import Note from './Note';
import { 
    StyleSheet, 
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class Main extends React.Component {
    
    constructor() {
        super(props);
        this.state = {
            noteList: [],
            noteText: '',
        };
    }

  render() {

    let notes = this.state.noteList.map((val, key) => {
       return 
        <Note 
            key={key} 
            value={key} 
            val={val}
            onDelete={ ()=> this.deleteNote(key) } />
    });

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> TODO </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>
            <TextInput 
            style={styles.textInput}
            onChangeText={(noteText)=> this.setState({noteText})}
            value = {this.state.noteText}
            placeholder='Note:'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
            </TextInput>
        </View>  

        <TouchableOpacity onPress={ this.newNote.bind(this) } style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>  
    </View>
    );
  }

  newNote() {

    if(this.state.noteText) {
        let date = new Date();
        this.state.noteList.push({
            'date': date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate(),
            'note': this.state.noteText
        });
        this.setState({ noteList: this.state.noteList })
        this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteList.splice(key, 1);
    this.setState.noteList({ noteList: this.state.noteList })
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#008080',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#808080'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#008080',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
});
