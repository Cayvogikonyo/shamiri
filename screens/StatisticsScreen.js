import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import global from '../components/styles/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    card: {
        flex: 1
    },
    image: {
        width: 100,
        height: 150,
        flex: 1,
        justifyContent: "flex-end",
    },
    imageStyle: {
        height: 180,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6
    },
    title: {
        color: '#C4C4C4'
    },
    h1: {
        fontSize: 18,
        fontWeight: "700"
    }
});


export default function Statistics({ navigation }) {
    const DailyStats = (props) => {
        const image = { uri: props.imageUrl ? props.imageUrl : "https://reactjs.org/logo-og.png" };

        return (


            <View>
                <Card body={
                    <Text>Chart goes here</Text>
                } />

                <Card body={
                    <View style={[styles.flex]}>
                        <Text>List goes here</Text>
                    </View>
                } />
            </View>

        )
    }


    const WeeklyStats = (props) => {
        let uri = "https://reactjs.org/logo-og.png"
        const image = { uri }

        return (
            <View>
                <Card body={
                    <Text>Line Chart goes here</Text>
                } />


                <Card cardStyles={{ padding: 0, elevation: 0 }} body={

                    <View style={[styles.flex]}>
                        <Text style={[styles.h1, global.p1]}>Recommendation</Text>

                        <Image
                            style={[styles.imageStyle]}
                            source={{ uri: uri }}
                        />
                        <View style={global.p2}>
                            <Text style={styles.title}>1-on-1 Session</Text>
                            <Text style={global.py1}>Talk to our therapists about employee burnout.</Text>
                        </View>
                    </View>
                } />
            </View>
        )
    }

    return (
        <ScrollView contentContainerStyle={[styles.container, global.p1]}>
            <StatusBar style="auto" />

            <Card body={
                <Text>Tabs Switcher Goes Here</Text>
            } />

            <DailyStats />
            <WeeklyStats />



        </ScrollView>

    );
}

