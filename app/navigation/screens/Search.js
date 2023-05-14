// import * as React from 'react';
// import{View, Text} from 'react-native';

// export default function Search(navigation) {
//     return (
//         <SafeAreaView style={styles.container}>
//       <View style ={{backgroundColor: 'white',flex:1, }}>
//         <View style={{backgroundColor:"#FF9933",flex:0.33}}/>
//         <View style={{backgroundColor:"#ffff",flex:0.33}}></View>
//         <View style={{backgroundColor:"green",flex:0.33}}/>
//       </View>
//       <Text>Search</Text>
//     </SafeAreaView>
        
//     );
// }
import * as React from 'react';
import{View, Text, SafeAreaView,StyleSheet} from 'react-native';

export default function Home({navigation}) {

    return (
        <SafeAreaView>
          {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
          <Text>Search!</Text>
          {/* </View> */}
      {/* <View style ={{backgroundColor: 'white',flex:1, }}>
        <View style={{backgroundColor:"#FF9933",flex:0.33}}/>
        <View style={{backgroundColor:"#ffff",flex:0.33}}></View>
        <View style={{backgroundColor:"green",flex:0.33}}/>
      </View> */}
      {/* <Text>Home</Text> */}
    </SafeAreaView>
        
    );
}