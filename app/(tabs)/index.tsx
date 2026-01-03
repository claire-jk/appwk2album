import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { CormorantGaramond_400Regular } from '@expo-google-fonts/cormorant-garamond';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { ZenKurenaido_400Regular } from '@expo-google-fonts/zen-kurenaido';
import { useFonts } from 'expo-font';
import { Dimensions, Text, View } from 'react-native';
// 1. 引入導航相關套件
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AlbumList from './Albumlist';
import Header from './Header'; // 1. 引入 Header 組件
const { width: windowWidth } = Dimensions.get('window');

// 2. 建立 Stack 導航器
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
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
  // 3. 用 NavigationContainer 包裹整個 App
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // 隱藏導航內建標題，因為你用了自訂 Header
        }}
      >
        {/* 4. 註冊 AlbumList 頁面 */}
        <Stack.Screen name="AlbumHome">
          {(props) => (
            <View style={{ flex: 1 , paddingTop: Platform.OS === 'android' ? 0 : insets.top}}>
              <Header titleFont="Caveat" />
              <AlbumList {...props} />
            </View>
          )}
        </Stack.Screen>

        {/* 未來如果你有第二個頁面，就加在這裡 */}
        {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
      </Stack.Navigator>
  );
}