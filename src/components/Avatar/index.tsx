import { Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { memo, useState} from 'react';
import edit_icon from './../../assets/images/edit.png';
import checked_icon from './../../assets/images/checked.png';
import { colors,common_styles } from '../../themes';

type props = {
  name? : string,                   // Avatar Name.
  src? : string,                    // Picture of the avatar.
  size? : number,                   // size of the avatar will be 50 pixel by default.
  shape? : string,                  // shape will be circle by default. possible values = ['circle','rectangle'].
  editable? : boolean,              // the avatar shows like its editable. 
  selectable? : boolean,              // the avatar shows like its editable. 
  variant? : string,                // this is the mode will be light by default.
  backgroundColor? : string,        // this change the avatar background color , this shows only when the image src is not available
  hasShadow?: boolean,              // this active the shadow to shows up.
  style?: any,                      // style to have full controle of styling the component.
  onPress?: ()=> void,              // this when a user press on the component.
}

const Avatar = ({
  name= 'Avatar',
  src,
  size = 50,
  shape = 'circle',
  style,
  editable,
  selectable,
  backgroundColor,
  hasShadow,
  onPress,
}:props) => {

  const [selected,setSelected] = useState(false);

  return(
          <TouchableOpacity
             onPress={()=>{
              if(selectable)
              setSelected(!selected);
              onPress;

            }}
             disabled={onPress == undefined}
             style={{
               width: size,
               height: size,
               borderRadius: shape =='rectangle' ? size/5 : size,
               margin: 5,
               ...(hasShadow ? common_styles.shadow : {}),
               ...style,  
             }}
            >
             { src ?
                    <ImageBackground
                    style={{
                      width: size,
                      height: size,
                      borderRadius: shape =='rectangle' ? size/5 : size,
                      overflow: 'hidden',
                      alignItems:'center',
                      justifyContent:'center',
                      ...style
                    }}
                    source={{
                      uri: src,
                    }} 
                    >
                      { ( editable || (selectable && selected) ) && 
                        <View
                          style={{
                            width: size,
                            height: size,
                            borderRadius: shape =='rectangle' ? size/5 : size,
                            backgroundColor:selectable ? colors.main+'bb' : '#0007',
                            alignItems:'center',
                            justifyContent:'center',
                            margin: 5,
                            //opacity: 0.5,
                            ...style
                          }}
                        >
                            
                          { (selectable && selected)?
                            <Image
                              style={{
                                width: size/3,
                                height: size/3,
                                tintColor: "white"
                              }}
                              source={checked_icon}
                            />
                            :
                            <Image
                            style={{
                              width: size/3,
                              height: size/3,
                              tintColor: "white"
                            }}
                            source={edit_icon}
                            />
                          }
                            
                        </View>
                      }
                    </ImageBackground> 
                   : // if there is no image source
                    <View
                      style={{
                          width: size,
                          height: size,
                          borderRadius: shape =='rectangle' ? size/5 : size,
                          backgroundColor: backgroundColor ? backgroundColor : colors.gray,
                          alignItems:'center',
                          justifyContent:'center',
                          margin: 5,
                          ...(hasShadow ? common_styles.shadow : {}),
                          ...style
                      }}
                    >
                      <Text 
                        style={{
                          fontSize:size/1.5,
                          color: 'white'
                        }}
                      >
                        {name[0].toUpperCase()}
                      </Text>
                    </View>
             }
          </TouchableOpacity> 
        )}

export default memo(Avatar)