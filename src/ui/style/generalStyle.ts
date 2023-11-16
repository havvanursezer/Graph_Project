import { StyleSheet } from "react-native";
import Colors from "../colors";
import { height, width } from "../size";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: Colors.white,
        alignItems: 'center',
        gap: height * 0.02
    },
    lineGraphContainer: {
        borderWidth: 1,
        borderColor: Colors.softGrey,
        borderRadius: 5,
        padding: 5,
        gap: 5,
        backgroundColor: Colors.white,
        shadowColor: Colors.grey,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    graphTitle: {
        color: Colors.grey,
        fontSize: 13
    },
    rowSelect: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',

    },
    button: {
        width: width * 0.5,
        backgroundColor: Colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 5

    },
    whiteText:{
        color:Colors.white,
        fontWeight:"600"
    },
    listItem:{
        flexDirection:'row',
        width:width*0.9,
        justifyContent:'space-between',

    },
    chartRow:{
        width:'90%',
    },
    pieChartContainer:{
        width:'90%',
    }
});

export default styles