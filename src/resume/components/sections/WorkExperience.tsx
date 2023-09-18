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
    marginTop: '7px'
  },
  employer: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  title: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  date: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  city: {
    fontFamily: 'RobotoBold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  oneLine: {
    marginLeft: '4px',
    marginRight: '4px',
    bottom: '4px'
  },
  mainContainer: {
    marginTop: 10
  },
  container: {
    flexDirection: 'row'
  }
})

const formatDateString = (dateString) => {
  if (!dateString) {
    return ''; // Return an empty string for null or undefined dates
  }

  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return `${month}, ${year}`;
};

export const WorkExperience = ({ work }) => {
  return (
    <>
    {work.length > 0 && 
        <>
          <View style={styles.summaryHeader}>
            <Text>Work Experience</Text>
          </View>
          <View style={styles.svgContainer}>
            <View style={styles.line} />
          </View>
        {work.map((item, i) => (
          <View style={styles.mainContainer} key={i}>
          <View style={styles.container}>
            <Text style={styles.employer}>{item.employer}</Text>
            {item.city.length > 1 ? <>
            <Text style={styles.oneLine}>|</Text>
            <Text style={styles.city}>{item.city}</Text>
            </> : null }
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            {item.startDate !== null || item.endDate !== null ? 
            <>
              <Text style={styles.oneLine}>|</Text>
              {/* <Text style={styles.date}>{item.startDate === null ? item.startDate : format(item.startDate, "MMM, yyyy")}  */}
              <Text style={styles.date}>
                      {formatDateString(item.startDate)}
                      {item.current ? ' - Current' : (
                        <>
                          {item.endDate !== null ? (
                            <>
                              {' '} - {formatDateString(item.endDate)}
                            </>
                          ) : null}
                        </>
                      )}
              </Text>
            </>
            : null}
          </View>
          <View>
            <Text style={styles.summaryText}>{item.description}</Text>
          </View>
        </View>
        ))}
        </>}
    </>
  )
}
