import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// 定義 Props，讓外部可以傳入不同的歌手名、專輯名和圖片網址
interface AlbumDetailProps {
  albumTitle: string;
  artist: string;
  thumbnail: string;
  mainImage: string;
}

const AlbumDetail = ({ albumTitle, artist, thumbnail, mainImage }: AlbumDetailProps) => {
  return (
    <View style={styles.cardContainer}>
      {/* 縮圖與文字區域 */}
      <View style={styles.thumbnailContainerStyle}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnailStyle} />
        <View style={styles.headerContentStyle}>
          <Text style={styles.albumTitleText}>{albumTitle}</Text>
          <Text style={styles.artistText}>{artist}</Text>
        </View>
      </View>

      {/* 大封面區域 */}
      <View style={styles.albumPictureStyle}>
        <Image source={{ uri: mainImage }} style={styles.imageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  thumbnailStyle: {
    width: 70,
    height: 70,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  albumTitleText: {
    fontFamily: 'Zen',
    color: '#ffffffff',
    fontSize: 18,
  },
  artistText: {
    fontFamily: 'Zen',
    fontSize: 14,
    color: '#ffffffff',
  },
  imageStyle: {
    height: 300,
    width: '100%',
  },
  albumPictureStyle: {
    padding: 5,
    backgroundColor: '#ffd261ff',
  }
});

export default AlbumDetail;