import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface AlbumDetailProps {
  albumTitle: string;
  artist: string;
  thumbnail: string;
  mainImage: string;
}

const AlbumDetail = ({ albumTitle, artist, thumbnail, mainImage }: AlbumDetailProps) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        {/* 大封面區域：放在上方吸引視覺 */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: mainImage }} style={styles.imageStyle} resizeMode="cover" />
        </View>

        {/* 底部資訊欄 */}
        <View style={styles.infoSection}>
          <Image source={{ uri: thumbnail }} style={styles.thumbnailStyle} />
          <View style={styles.textContainer}>
            <Text style={styles.albumTitleText} numberOfLines={1}>{albumTitle}</Text>
            <Text style={styles.artistText}>{artist}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  cardContainer: {
    backgroundColor: '#1e1e1e', // 深色質感底色
    borderRadius: 16,
    overflow: 'hidden',
    // iOS 陰影
    shadowColor: "#ffffffff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Android 陰影
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 250,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  infoSection: {
    flexDirection: "row",
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#282828',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderRadius: 25, // 圓形大頭貼
    borderWidth: 2,
    borderColor: '#efff61ff',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  albumTitleText: {
    color: '#ffffff',
    fontSize: 20,
    //fontWeight: '700',
    marginBottom: 4,
    fontFamily: 'Caveat',
  },
  artistText: {
    fontSize: 14,
    color: '#b3b3b3', // 灰字副標
    letterSpacing: 1.2,
    fontFamily: 'Zen',
  },
});

export default AlbumDetail;