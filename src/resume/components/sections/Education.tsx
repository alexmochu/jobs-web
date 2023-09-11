import { SectionWrapper } from '../shared'
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import { format } from 'date-fns'; 

Font.register({
  family: 'RobotoBold',
  src: '/fonts/Roboto-Bold.ttf',
})

const styles = StyleSheet.create({
  svgContainer: {
    backgroundColor: 'red',
    width: '100%',
    marginBottom: 10,
    marginTop: 6,
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
    marginTop: 15,
  },
  summaryText: {
    fontSize: 13,
    lineHeight: 1.5,
  },
  school: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  degree: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  city: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  data: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  container: {
    flexDirection: 'row'
  },
  oneLine: {
    marginLeft: '4px',
    marginRight: '4px',
    bottom: '4px'
  }
})

export const Education = ({ education }) => {
  return (
    <>
    <>
      <View style={styles.summaryHeader}>
        <Text>Education</Text>
      </View>
      <View style={styles.svgContainer}>
          <View style={styles.line} />
        </View>
      {education.map((item, i) => (
        <>
          <View style={styles.container}>
            <Text style={styles.school}>{item.school}</Text>
            {item.city.length > 1 ? <>
              <Text style={styles.oneLine}>|</Text>
              <Text style={styles.city}>{item.city}</Text>
            </> : null}
          </View>
          <View style={styles.container}>
            <Text style={styles.degree}>{item.degree}</Text>
            {item.startDate !== null || item.endDate !== null ? <>
              <Text style={styles.oneLine}>|</Text>
              <Text style={styles.data}>{item.startDate === null ? item.startDate : format(item.startDate, "MMM, yyyy")}
              {item.endDate !== null ? <>
                {' '} - {item.endDate === null ? item.endDate : format(item.endDate, "MMM, yyyy")}
              </> : null}
              </Text>
            </> : null}
          </View>
          <View>
            <Text style={styles.summaryText}>{item.description}</Text>
          </View>
          {/* {summary} */}
          </>
        ))}
        </>
    </>
  )
}
