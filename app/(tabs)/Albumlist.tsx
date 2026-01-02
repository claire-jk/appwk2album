import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import albumData from './albums.json';

const AlbumList = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Solo Discography</Text>
      </View>
      
      {albumData.map((album, index) => (
        <AlbumDetail 
          key={index} 
          albumTitle={album.title}
          artist={album.artist}
          thumbnail={album.thumbnail_image}
          mainImage={album.image}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // 全域深色背景
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    //fontWeight: 'bold',
    color: '#ffd261',
    letterSpacing: 1,
    fontFamily: 'Vibes',
  }
});

export default AlbumList;