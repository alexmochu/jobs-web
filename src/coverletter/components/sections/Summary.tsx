import {
  Text,
  View,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

Font.register({
  family: 'RobotoBold',
  src: '/fonts/Roboto-Bold.ttf',
});

const styles = StyleSheet.create({
  svgContainer: {
    backgroundColor: 'red',
    width: '100%',
    marginBottom: 10,
    marginTop: 6
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  summaryHeader: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 15
  },
  summaryText: {
    fontSize: 13,
    lineHeight: 1.5
  }
});

export const Summary = ({state}) => {
  const { letterDetails } = state

  return (
    <>
    {letterDetails ? 
    <>  
    <View style={styles.summaryHeader}><Text>Summary</Text></View>
    <View style={styles.svgContainer}>
      <View style={styles.line} />
    </View> 
    <View>
      <Text style={styles.summaryText}>
        {letterDetails}
        </Text>
    </View>
    </>
    : null}
    </>
  );
};