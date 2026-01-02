import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { CormorantGaramond_400Regular } from '@expo-google-fonts/cormorant-garamond';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { ZenKurenaido_400Regular } from '@expo-google-fonts/zen-kurenaido';
import { useFonts } from 'expo-font';
import { Dimensions, Text, View } from 'react-native';
import AlbumList from './Albumlist';
import Header from './Header'; // 1. 引入 Header 組件
const { width: windowWidth } = Dimensions.get('window');

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    'Zen': ZenKurenaido_400Regular,
    'Vibes': GreatVibes_400Regular,
    'Caveat': Caveat_400Regular,
    'Garamond': CormorantGaramond_400Regular,
  });

  // 檢查字體是否加載完成
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header titleFont="Caveat" />
      <AlbumList /> 
    </View>
  );
}