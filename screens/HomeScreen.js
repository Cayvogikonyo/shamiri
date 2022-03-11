import isEmpty from 'lodash/isEmpty';
import { useAssets } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Pressable, ActivityIndicator } from 'react-native';
import Card from '../components/Card';

import {
    ProgressChart
} from "react-native-chart-kit";

import global from '../components/styles/styles'
import React, { useCallback, useState } from 'react';
import ProgressChartHelper from '../components/ProgressChartHelper';
import { randomIntFromInterval } from '../components/helper'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column"
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
    collapsed: {
        width: Dimensions.get('screen').width,
        height: 150
    },
    expanded: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.45,
    },
    svg: {
        width: Dimensions.get("window").width
    },
    header: {
        width: Dimensions.get("window").width
    },
    textWhite: { color: 'white' },
    noradius: { borderTopRightRadius: 0, borderTopLeftRadius: 0 }
});

export default function Home({ navigation }) {

    /**
     * Load assets used in this screen
     */
    const [assets, error] = useAssets([require('../assets/bg-vector.png'), require('../assets/previous.png'), require('../assets/next.png'), require('../assets/notecard2.png')]);

    const [weeklyView, setWeeklyView] = useState(true);

    //Used to render informational picture cards
    const CardImage = (props) => {
        const image = { uri: props.imageUrl ?? null };

        return (
            <View style={[styles.card, global.flex]}>

                <ImageBackground source={image} resizeMode="cover" style={[styles.image, global.roundedlg]} imageStyle={[global.roundedlg]}>
                    {image.uri == null ? <ActivityIndicator color={'green'} /> : <Text onPress={() => navigation.navigate('Statistics')} style={[styles.text, global.py1, global.roundedlg, styles.noradius]}>{props.text}</Text>}
                </ImageBackground>
            </View>)
    }

    const toggleView = () => {
        if (weeklyView) {
            setWeeklyView(false)
        } else {
            setWeeklyView(true);
        }
    }

    const onDateChanged = (/* date, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
        // fetch and set data for date + week ahead
    };

    const onMonthChange = (/* month, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
    };

    const marked = {
        '2022-03-05': {
            marked: true, dotColor: '#50cebb', textColor: 'black', backgroundColor: 'green', fontWeight: 'bold'
        },
        '2022-03-15': { marked: true, dotColor: '#50cebb', textColor: 'black' },
        '2022-03-16': { marked: true, dotColor: '#50cebb', textColor: 'black' },
        '2022-03-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
        '2022-03-22': { color: '#70d7c7', textColor: 'white' },
        '2022-03-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
        '2022-03-24': { color: '#70d7c7', textColor: 'white' },
        '2022-03-25': { endingDay: true, color: '#50cebb', textColor: 'white' }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar style="auto" />



            <View >


                <ImageBackground source={require('../assets/bg-vector.png')} resizeMode="stretch" style={[styles.header, { minHeight: Dimensions.get("screen").height * 0.25 }]}>
                    <View style={[global.py2, { justifyContent: "flex-end" }]}>
                        <View style={[global.my2]}>

                            {/* {weeklyView ?
                                    (<CalendarProvider date={new Date().toDateString()}>
                                        <ExpandableCalendar firstDay={1}
                                            isOpen
                                            disablePan={false} //we need this
                                            disableWeekScroll={true}
                                            markedDates={marked}
                                        />
                                    </CalendarProvider>
                                    ) : (<Calendar
                                        
                                        style={global.rounded}
                                        markingType={'period'}
                                        markedDates={marked}
                                    />)} */}
                            {weeklyView ? (
                                <Image width={Dimensions.get('screen').width} source={require('../assets/calendar-collapsed.png')} resizeMode="cover" style={[styles.collapsed, global.roundedlg]} />
                            ) : (<Image source={require('../assets/calendar.png')} resizeMode="cover" style={[styles.expanded, global.roundedlg]} />
                            )}


                            <TouchableOpacity style={global.py1} onPress={() => toggleView()}>
                                <Text>{weeklyView}</Text><Text style={[global.textRight, global.p1, global.mb1, styles.textWhite]}>{weeklyView ? 'Show More' : 'Show Less'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>

                <Card cardStyles={{ padding: 0 }} body={
                    <View style={{ overflow: 'scroll' }}>

                        <ProgressChartHelper
                            data={{
                                labels: ["Mental Health", "Satisfaction", "Family/Social Support", "Work", "Sense of Purpose"], // optional
                                data: [
                                    randomIntFromInterval(10, 100) / 100,
                                    randomIntFromInterval(10, 100) / 100,
                                    randomIntFromInterval(10, 100) / 100,
                                    randomIntFromInterval(10, 100) / 100,
                                    randomIntFromInterval(10, 100) / 100
                                ]
                            }}

                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                            <Text style={[global.textRight, global.p1, { color: 'black' }]}>Show More</Text>
                        </TouchableOpacity>
                    </View>
                } />

                <Card title="Your Wellness Plan" body={
                    <View >
                        <View style={[global.flex, { justifyContent: "flex-start" }]}>

                            <CardImage text='Veronica W' imageUrl={assets ? assets[3].uri : null} />
                            <CardImage text='Sunahra N' imageUrl={assets ? assets[3].uri : null} />

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}><Text style={global.textRight}>More</Text></TouchableOpacity>
                    </View>
                }
                />

            </View>

        </ScrollView>
    );
}

