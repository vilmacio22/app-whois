import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    background:{
        flex:1,
        borderWidth:2,
        borderColor:'red',
        backgroundColor:'blue'
    },
    drawerIcon:{
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    headerTitle:{
        color: '#fff',
        fontSize: 16
    },
    historyList:{
        paddingBottom:90
    },
    historyItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderColor:'rgba(1, 1, 1, 0.15)',
        backgroundColor:'#fff',
        paddingVertical:17,
        paddingHorizontal:25,
    },
    itemTitle:{
        color:'#000',
        fontSize:16
    },
    time:{
        color:'gray'
    }

})