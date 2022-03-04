import {
    StyleSheet,
} from 'react-native';
import global from './styles/styles'
import {
    LineChart,
} from "react-native-chart-kit";

export default LineChartHelper = (props) => {
    return (
        <LineChart
            data={props.data}
            width={global.fullwidth.width * 0.92} // from react-native
            height={225}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{...{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }, ...props.chartConfig}}
            bezier
            style={{
                borderRadius: 6
            }}
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