import React, { useState } from 'react';
// 1. 引入 Linking
import { FlatList, Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AlbumDetail from './AlbumDetail';
import albumData from './albums.json';

const AlbumList = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  // 2. 定義跳轉函數
  const openYouTube = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("無法開啟連結：" + url);
    }
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{selectedAlbum?.title}</Text>
            
            {/* 3. 將主打歌文字變成可點擊的連結 */}
            <TouchableOpacity onPress={() => openYouTube(selectedAlbum?.youtube_url)}>
              <Text style={styles.modalContent}>
                主打歌：
                <Text style={styles.hitLinkText}>
                  {selectedAlbum?.hit} (點擊播放🎵)
                </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text>關閉</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={albumData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { setSelectedAlbum(item); setModalVisible(true); }}>
            <AlbumDetail {...item} albumTitle={item.title} mainImage={item.image} thumbnail={item.thumbnail_image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Solo Discography</Text>
          </View>
        }
      />
    </View>
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
  },
  // Modal 樣式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // 背景變暗
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#282828',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffd261',
  },
  modalTitle: {
    fontSize: 24,
    color: '#ffd261',
    fontFamily: 'Vibes', // 使用你的自訂字型
    marginBottom: 15,
  },
  modalContent: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Zen', // 使用你的自訂字型
    textAlign: 'center',
    marginBottom: 20,
  },
  hitSongText: {
    color: '#ffd261',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ffd261',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  hitLinkText: {
    color: '#ffd261',
    textDecorationLine: 'underline', // 加入下劃線，看起來更像連結
    //fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Zen',
  }
});

export default AlbumList;