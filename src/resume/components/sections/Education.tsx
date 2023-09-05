import { SectionWrapper } from '../shared'
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
})

export const Education = ({ education }) => {
  return (
    <>
    <>
      <View style={styles.summaryHeader}>
        <Text>Education</Text>
      </View>
      {education.map((item, i) => (
        <>
          <View>
            <Text>{item.school}</Text>
            <Text>{item.startDate} - {item.endDate}</Text>
          </View>
          <View>
            <Text>{item.degree}</Text>
            <Text>{item.city}</Text>
          </View>
          <View>
            <Text style={styles.summaryText}>{item.description}</Text>
          </View>
          {/* {summary} */}
          </>
        ))}
        </>

      <SectionWrapper title='Education'>
        <ul className='ml-2'>
          {education.map((education, i) => (
            <li key={education.school} className={i % 2 ? 'mt-1 exp-list' : 'mt-half exp-list'}>
              <div className='flex'>
                <h3>
                  Kenyatta Uni - Nairobi
                  {/* {education.school} - {education.city} */}
                </h3>
                <span className='ml-auto text-muted'>
                  1 june 2019 - 1 June 2022
                  {/* {education.startDate} - {education.endDate} */}
                </span>
              </div>
              <h4 className='italic'>
                Bsc Econimics
                {/* {education.degree} */}
                {/* , {education.major} */}
              </h4>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </>
  )
}
