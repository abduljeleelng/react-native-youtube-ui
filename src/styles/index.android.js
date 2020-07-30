import {StyleSheet} from 'react-native';
import Colors from './Colors';
import FontSize from './FontSize' ;

export const global = StyleSheet.create({
    container:{
        flex:1,
    },
    topMenu:{
        height:60,
        flexDirection:'row',
        backgroundColor:Colors.light,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'space-between',
        elevation:4,
    },
    nav :{
        flexDirection:'row',
    },
    navLogo:{
        width:100,
        height:22
    },
    navItem :{
        marginLeft:20,
    },
    videoContent:{
        paddingHorizontal:15,
        zIndex:-5
    },
    videoImage:{
        marginVertical:5,
        aspectRatio:1,
        backgroundColor:'rgba(0,0,0,0.2)',
    },
    videoDescription:{
        flexDirection:'row',
        paddingTop:15,
    },
    videoTitle:{
        fontSize:FontSize.medium,
        color:Colors.light,
    },
    videoDescription:{

    },
    navigationBar:{
        height:60,
        flexDirection:'row',
        backgroundColor:Colors.light,
        paddingHorizontal:15,
        alignItems:"center",
        justifyContent:'space-around',
        borderTopWidth:1,
        borderColor:Colors.light,
    },
    navItems:{
        justifyContent:'center',
        alignItems:'center',
    },
    navTitle:{
        fontSize:FontSize.medium,
        color:Colors.black,
        padding:4,
    }
});