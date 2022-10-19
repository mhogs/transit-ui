import { StyleSheet } from 'react-native'

export const common_styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centred: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
})
