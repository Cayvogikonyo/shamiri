import { useAssets } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import Card from '../components/Card';

import global from '../components/styles/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    card: {
        width: 100,
        margin: 8
    },
    image: {
        width: 100,
        height: 150,
        flex: 1,
        justifyContent: "flex-end",
    },
    svg: {
        width: Dimensions.get("window").width
    },
    header: {
        width: Dimensions.get("window").width
    }
});

export default function Home({ navigation }) {

    const [assets, error] = useAssets([require('../assets/bg-vector.png')]);


    //Used to render informational picture cards
    const CardImage = (props) => {
        const image = { uri: props.imageUrl ?? "https://reactjs.org/logo-og.png" };

        return (
            <View style={[styles.card, global.flex]}>
                <ImageBackground source={image} resizeMode="cover" style={[styles.image, global.roundedlg]} imageStyle={[global.roundedlg]}>
                    <Text onPress={() => navigation.navigate('Statistics')} style={[styles.text, global.py1, global.roundedlg]}>{props.text}</Text>
                </ImageBackground>
            </View>)
    }

    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <StatusBar style="auto" />


            {assets ?
                <ImageBackground source={assets[0]} resizeMode="stretch" style={[styles.header]}>
                    <View style={[global.p2, { justifyContent: "flex-end" }]}>
                        <View style={global.m2}>
                            <Text>Calendar component goes here</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <Text>rtsdhyrjtgh</Text>
                            <TouchableOpacity style={global.py1} onPress={() => navigation.navigate('Statistics')}>
                                <Text style={global.textRight}>Show More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground> : null}

            <View style={[global.fullwidth]}>

                <Card body={<Text onPress={() => navigation.navigate('Statistics')}>This is a chart card</Text>} />

                <Card title="Your Wellness Plan" body={
                    <View >
                        <View style={[global.flex, { justifyContent: "flex-start" }]}>

                            <CardImage text='Hello world' imageUrl='https://reactjs.org/logo-og.png' />
                            <CardImage text='Another Hello world' imageUrl='https://reactjs.org/logo-og.png' />

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}><Text style={global.textRight}>More</Text></TouchableOpacity>
                    </View>
                }
                />

            </View>

        </ScrollView>

    );
}

