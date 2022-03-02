import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default function Home({ navigation }) {
  
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>

        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Statistics')}
        />
        <StatusBar style="auto" />
      </View>
      
    );
}

