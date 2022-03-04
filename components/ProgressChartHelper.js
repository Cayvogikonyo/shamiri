import {
    Dimensions,
    StyleSheet,
} from 'react-native';
import global from './styles/styles'
import {
    ProgressChart,
} from "react-native-chart-kit";


export default ProgressChartHelper = (props) => {


    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(33, 189, 175, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
        
    };


    return (
        <ProgressChart
            data={props.data}
            width={Dimensions.get('screen').width * 0.86}
            height={250}
            strokeWidth={10}
            radius={16}
            chartConfig={{...chartConfig, ...props.chartConfig}}
            hideLegend={props.hideLegend ? true : false}
            style={{}}
            center
        />
    );
}


const styles = StyleSheet.create({
    title: {
        color: '#C4C4C4'
    },
    text: {
        color: 'red',
        fontSize: 16,
    },
});