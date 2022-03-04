import isEmpty from 'lodash/isEmpty';
import { useAssets } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import Card from '../components/Card';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar } from 'react-native-calendars';

import { Calendar } from 'react-native-calendars';
import {
    ProgressChart
} from "react-native-chart-kit";

import global from '../components/styles/styles'
import React, { useCallback, useState } from 'react';
import ProgressChartHelper from '../components/ProgressChartHelper';
import { randomIntFromInterval } from '../components/helper'

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
    svg: {
        width: Dimensions.get("window").width
    },
    header: {
        width: Dimensions.get("window").width
    },
    textWhite:  { color: 'white' },
    noradius:  { borderTopRightRadius: 0, borderTopLeftRadius: 0 }
});

export default function Home({ navigation }) {

    /**
     * Load assets used in this screen
     */
    const [assets, error] = useAssets([require('../assets/bg-vector.png'), require('../assets/previous.png'), require('../assets/next.png'), require('../assets/notecard2.png')]);

    const [weeklyView, setWeeklyView] = useState(true);

    //Used to render informational picture cards
    const CardImage = (props) => {
        const image = { uri: props.imageUrl ?? "https://reactjs.org/logo-og.png" };

        return (
            <View style={[styles.card, global.flex]}>
                <ImageBackground source={image} resizeMode="cover" style={[styles.image, global.roundedlg]} imageStyle={[global.roundedlg]}>
                    <Text onPress={() => navigation.navigate('Statistics')} style={[styles.text, global.py1, global.roundedlg, styles.noradius]}>{props.text}</Text>
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


                {assets ?
                    <ImageBackground source={assets[0]} resizeMode="stretch" style={[styles.header]}>
                        <View style={[global.p2, { justifyContent: "flex-end" }]}>
                            <View style={global.m2}>

                                {weeklyView ?
                                    (<CalendarProvider date={new Date().toDateString()}>
                                        <ExpandableCalendar firstDay={1}
                                            disablePan={true} //we need this
                                            disableWeekScroll={true}
                                            markedDates={marked}
                                        />
                                    </CalendarProvider>
                                    ) : (<Calendar
                                        style={global.rounded}
                                        markingType={'period'}
                                        markedDates={marked}
                                    />)}


                                <TouchableOpacity style={global.py1} onPress={() => toggleView()}>
                                    <Text>{weeklyView}</Text><Text style={[global.textRight, global.py1, styles.textWhite]}>{weeklyView ? 'Show More' : 'Show Less'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground> : null}

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

                            <CardImage text='Veronica W' imageUrl={assets ? assets[3].uri : 'https://reactjs.org/logo-og.png'} />
                            <CardImage text='Sunahra N' imageUrl={assets ? assets[3].uri : 'https://reactjs.org/logo-og.png'} />

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}><Text style={global.textRight}>More</Text></TouchableOpacity>
                    </View>
                }
                />

            </View>

        </ScrollView>
    );
}

