import { Fragment } from 'react'
// import { SectionWrapper } from '../shared'
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

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
  viewLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
  },
})

export const Skills = ({ skills }) => {
  return (
    <>
      {true ? (
        <>
          <View style={styles.summaryHeader}>
            <Text>Skills</Text>
          </View>
          <View style={styles.svgContainer}>
            <View style={styles.line} />
          </View>
          <View style={styles.viewLinks}>
            {skills.map((skill) => (
              <Fragment key={skill}>
                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>•</Text>
                <Text>{skill}</Text>
              </Fragment>
            ))}
          </View>
          {/* {summary} */}
        </>
      ) : null}
      {/* <SectionWrapper title="Skills">
      {skills.map((skill) => (
        <Fragment key={skill}>
          <Text style={{ paddingLeft: 10, paddingRight: 10 }}>•</Text>
          <Text>{skill}</Text>
        </Fragment>
      ))}
    </SectionWrapper> */}
    </>
  )
}
