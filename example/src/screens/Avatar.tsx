import { ScrollView, Text } from 'react-native'
import React, { memo } from 'react'
import { Avatar, theams } from 'logikey-ui';

const AvatarScreen = () => {
  return (
    <ScrollView
      style={{
          flex: 1,
      }}
      contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingVertical: 20
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ marginBottom: 20, color: theams.colors.black_text }}>
        This is how our Avatars looks like 🥳
      </Text>

      {/* when no props is used the avatar show up like a gray circle
       with let 'A' the first letter of Avatar by default and size 50
        pixels by default*/}

      <Avatar />

      {/* changing the name of the avatar*/}

      <Avatar name={'hani salah Eddine cherif'} />

      {/* changing the size of the avatar*/}

      <Avatar name={'hani salah Eddine cherif'} size={80} />  

      {/* changing the color of the background*/}

      <Avatar
        name={'hani salah Eddine cherif'}
        size={80}
        backgroundColor={'purple'}
      />       

      {/* adding the picture to the avatar*/}

      <Avatar
        name={'hani salah Eddine cherif'}
        size={80}
        src={'https://freehali.com/freehali-assets/uploads/2020/01/cropped-me-878-2.png'}
      />
      
      {/* adding the shadow*/}

      <Avatar
        name={'hani salah Eddine cherif'}
        size={80}
        src={'https://freehali.com/freehali-assets/uploads/2020/01/cropped-me-878-2.png'}
        hasShadow
      />

      {/* clickable */}

      <Avatar
        name={'hani salah Eddine cherif'}
        size={80}
        src={'https://freehali.com/freehali-assets/uploads/2020/01/cropped-me-878-2.png'}
        onPress={()=>{}}
        hasShadow

      />

      {/* editable */}

      <Avatar
        name={'hani salah Eddine cherif'}
        size={80}
        src={'https://freehali.com/freehali-assets/uploads/2020/01/cropped-me-878-2.png'}
        onPress={()=>{}}
        hasShadow
        editable
      />

      {/* selectable */}

      <Avatar
        name={'hani salah Eddine cherif'}
        size={80}
        src={'https://freehali.com/freehali-assets/uploads/2020/01/cropped-me-878-2.png'}
        onPress={()=>{}}
        hasShadow
        selectable
      />

    </ScrollView>
  )
}

export default memo(AvatarScreen)