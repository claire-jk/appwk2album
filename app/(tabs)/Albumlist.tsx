import React from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
// 引入剛剛建立的 JSON 檔案
import albumData from './albums.json';

const AlbumList = () => {
  return (
    <ScrollView>
      {/* 使用 map 迴圈，自動將 JSON 裡的每一筆資料轉成組件 */}
        {albumData.map((album, index) => (
        <AlbumDetail 
            // 修正點：使用 index 或 album.title 作為唯一 Key
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

export default AlbumList;