import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { useRouter } from 'expo-router';

//splash screen 
const SplashScreen: React.FC = () => {
  const router = useRouter();



useEffect(()=>{
  setTimeout(()=>{
    router.replace("/loginPage");
  },3000)
})


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lactster</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 30,
    color: '#333',
  },
});


export default SplashScreen;
