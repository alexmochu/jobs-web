import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

Font.register({
  family: 'RobotoBold',
  src: '/fonts/Roboto-Bold.ttf',
})

const styles = StyleSheet.create({
  summaryText: {
    fontSize: 13,
    lineHeight: 1.5,
  },
})

export const Summary = ({ state }) => {
  const { letterDetails } = state

  return (
    <>
      {letterDetails ? (
        <>
          <View>
            <Text style={styles.summaryText}>{letterDetails}</Text>
          </View>
        </>
      ) : null}
    </>
  )
}
