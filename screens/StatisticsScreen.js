import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, Dimensions, Pressable, FlatList } from 'react-native';

import LineChartHelper from '../components/LineChartHelper';
import ProgressChartHelper from '../components/ProgressChartHelper';

import { randomIntFromInterval } from '../components/helper'

import global from '../components/styles/styles'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { useAssets } from 'expo-asset';
import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
    },
    progressBar: {
        marginVertical: 6,
        position: 'relative',
        height: 12,
        borderRadius: 12,
    },
    progressBar1: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'red'
    },
    textGray: {
        color: 'gray'
    }
});


export default function Statistics({ navigation }) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [weeklyView, setWeeklyView] = useState(false);
    const [dateToday, setDateToday] = useState(new Date().toLocaleDateString("en-US", options));
    console.log(dateToday)
    const [listData, setListData] = useState([
        { name: "Mental Health", subtitle: "8/10", barlength: 90, backgroundColor: '#F6E9E7' }, 
        { name: "Satisfaction", subtitle: "2.5/10", barlength: 25, backgroundColor: '#E3A89F' }, 
        { name: "Family/Social Support", subtitle: "4.5/10", barlength: 45, backgroundColor: '#BCD9D1' }, 
        { name: "Work", subtitle: "6/10", barlength: 60, backgroundColor: '#85BDAF' }, 
        { name: "Sense Of Purpose", subtitle: "4/10", barlength: 40, backgroundColor: '#143029' }, 
       
    ]);

    /**
     * Toggle the displayed tab screen
     */
    const toggleView = () => {
        let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        if (weeklyView == false) {

            var from = moment(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)).format('MMM DD, YYYY');
            var to = moment(new Date()).format('MMM DD, YYYY');

            navigation.setOptions({ title: from + ' - ' + to })
            setDateToday(from + ' - ' + to);
            setWeeklyView(true);
           

        } else {
            navigation.setOptions({ title: moment(new Date()).format('MMM DD, YYYY')})
            setDateToday(moment(new Date()).format('MMM DD, YYYY'))
            setWeeklyView(false);

        }
    }

    /**
     * This renders one item in our list view
     * @param {item: {name, subtitle, barlength, backgroundColor}, index} props 
     * @returns 
     */
    const RenderItem = (props) => {
        return (<View>
            <View style={[global.flex, global.py1,{justifyContent: 'space-between'}]}>
                <Text style={styles.textGray}>{props.item.name}</Text>
                <Text style={styles.textGray}>{props.item.subtitle}</Text>
            </View>
            <View style={[styles.progressBar, global.rounded]}>
                <View style={[styles.progressBar1, global.rounded, {width: props.item.barlength ? props.item.barlength+'%' : 0, backgroundColor: props.item.backgroundColor ? props.item.backgroundColor : 'red'}]}></View>
            </View>
        </View>)
    }

    /**
     * Weekly information page.
     * @param {imageUrl} props 
     * @returns 
     */
    const WeeklyStats = (props) => {
        const image = { uri: props.imageUrl ? props.imageUrl : "https://reactjs.org/logo-og.png" };
        return (
            <View>
                <Card body={
                    <ProgressChartHelper
                        data={{
                            labels: ["Mental Health", "Satisfaction", "Work",], // optional
                            data: [
                                randomIntFromInterval(10, 100) / 100,
                                randomIntFromInterval(10, 100) / 100,
                                randomIntFromInterval(10, 100) / 100,
                            ]
                        }}
                        chartConfig={{ color: (opacity = 1) => `rgba(182, 58, 132, ${opacity})` }}
                        hideLegend="true"
                    />
                } />

                <Card body={
                    <View style={[styles.flex]}>
                        {listData.map((item, index) => {
                            return (<RenderItem key={index} item={item} />)
                        })}
                    </View>
                } />
            </View>

        )
    }


    /**
     * Daily information page. Rendered as default
     * @param {*} props 
     * @returns 
     */
    const DailyStats = (props) => {
        let uri = "https://reactjs.org/logo-og.png"
        const image = { uri }
        const assets = useAssets([require('../assets/notecard.png')]);
        return (
            <View>
                <Card title="Mental Health Data"  cardStyles={{ padding: 0 }} body={
                    <LineChartHelper
                        data={{
                            labels: ["S", "M", "T", "W", "T", "F", "S"],
                            datasets: [
                                {
                                    data: [
                                        randomIntFromInterval(0, 10),
                                        randomIntFromInterval(0, 10),
                                        randomIntFromInterval(0, 10),
                                        randomIntFromInterval(0, 10),
                                        randomIntFromInterval(0, 10),
                                        randomIntFromInterval(0, 10),
                                        randomIntFromInterval(0, 10)
                                    ]
                                }
                            ]
                        }}>

                    </LineChartHelper>

                } />


                <Card cardStyles={{ padding: 0, elevation: 0, backgroundColor: 'transparent' }} body={

                    <View style={[styles.flex]}>
                        <Text style={[styles.h1, global.p1]}>Recommendation</Text>

                        <Image
                            style={[styles.imageStyle]}
                            source={assets ? assets[0] : { uri: uri }}
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

    /**
     * Render the screen
     */
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={global.p1}>
                <StatusBar style="auto" />

                <View style={[global.flex, global.m2, { justifyContent: "space-around", backgroundColor: "#F6E9E7", borderRadius: 20, paddingVertical: 4 }]}>

                    <Text onPress={toggleView} style={[{ color: 'black', flex: 1, textAlign: "center" }, global.p1, !weeklyView ? { backgroundColor: 'white', borderRadius: 20 } : null]} >Daily</Text>
                    <Text onPress={toggleView} style={[{ color: 'black', flex: 1, textAlign: "center" }, global.p1, weeklyView ? { backgroundColor: 'white', borderRadius: 20 } : null]} >Weekly</Text>


                </View>

                {weeklyView ? <WeeklyStats /> : <DailyStats />}


            </View>

        </ScrollView>

    );
}

