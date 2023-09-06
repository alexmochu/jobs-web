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
})

export const WorkExperience = ({ work }) => {
  return (
    <>
        <>
          <View style={styles.summaryHeader}>
            <Text>Work Experience</Text>
          </View>
        {work.map((item, i) => (
          <>
          <View>
            <Text>{item.employer}</Text>
            {/* <Text>{} - {item.endDate}</Text> */}
            <Text>{item.startDate === null ? item.startDate : format(item.startDate, "MMM, yyyy")} - {item.endDate === null ? item.endDate : format(item.startDate, "MMM, yyyy")}</Text>
          </View>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.city}</Text>
          </View>
          <View>
            <Text style={styles.summaryText}>{item.description}</Text>
          </View>
        </>
        ))}
        </>
      
      {/* <SectionWrapper title='Work Experience'>
        <ul className='ml-2'>
          {work.map((item, i) => (
            <li key={item.employer} className={i % 2 ? 'mt-1 exp-list' : 'mt-half exp-list'}>
              <div className='flex'>
                <h3>
                  Andela - Kenya
                </h3>
                <span className='ml-auto text-muted'>
                  1 june 2019 - 1 June 2022
                </span>
              </div>
              <h4 className='italic'>
                Sofware Developer
              </h4>
              <p>
                This is a description
              </p>
            </li>
          ))}
        </ul>
      </SectionWrapper> */}
    </>
  )
}
