import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, Button } from 'react-native';
// import { Vimeo } from 'react-native-vimeo';
import { Video } from 'expo-av';
import Store from '../Store';
import heart from '../Images/heart.png';
import comment from '../Images/comment.png';

export default class HomePage extends Component {
// export default function HomePage() {
  render() {

  const {users} = Store;
  const onButtonPress = {onButtonPress}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {users.map(u =>
        <View>
          <View style={styles.users}>
            <Image key={u.id} source={u.userpic} style={styles.userpic} />
            <Text style={styles.username}>{u.user}</Text>
          </View>
          {u.movie.map(m =>
          <View style={styles.reviews}>
            <Video
              source={m.video}
              key = {m.id}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              isLooping
              useNativeControls={true}
              style={{ width: 415, height: 300 }}
            />
            <View style={styles.reaction}>
              <Image source={heart} style={styles.reactImg} />
              <Button title='Like' style={styles.reactBut}/>
              <Image source={comment} style={styles.reactImg}/>
              <Button title='Comment' style={styles.reactBut}/>
            </View>
            <View style={styles.reviewText}>
              <Image key={m.id} source={m.thumb} style={styles.thumb}/>
              <Text style={styles.reviewInfo}><Text style={{fontWeight: 'bold'}}>{u.user}</Text> <Text>{m.review}</Text></Text>
            </View>
          </View>)}
        </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 70,
  },
  users: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  userpic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  reviewText: {
    flexDirection:'row',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  reaction: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop: 5,
    marginBottom: 5,
  },
  reactImg: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 9,
  },
  reactBut: {
    // margin: 0,
  },
  reviewInfo: {
    marginLeft: 40,
    marginRight: 140,
  },
  thumb: {
    width: 100,
    height: 120,
    marginLeft: 20,
  },
})