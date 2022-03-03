import { Dimensions, StyleSheet } from "react-native";

var {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({

    card : {
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 2
    },
    textRight: {
        textAlign: "right"
    },  
    rounded: {
        borderRadius: 6
    },
    roundedlg: {
        borderRadius: 12
    },
    m1: {
        margin: 8
    },
    m2: {
        margin: 16
    },
    mb2: {
        marginBottom: 48
    },
    p1: {
        padding: 8
    },
    p2: {
        padding: 16
    },
    px2: {
        paddingHorizontal: 16
    },
    py1: {
        paddingVertical: 8
    },
    py2: {
        paddingVertical: 16
    },
    flex: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    widthThird: {
        width: ((width * 0.96) / 3) - 20,
    },
    fullwidth: {
        width: width * 0.96,
        marginHorizontal: "auto"
    },
    flexgrow: {
        flexGrow: 1.
    }
    
});