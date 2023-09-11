import { Fragment, useCallback } from 'react'
import { Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer'

Font.register({
  family: 'TavirajBold',
  src: '/fonts/Taviraj-Bold.ttf',
})

const styles = StyleSheet.create({
  name: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 23,
    fontFamily: 'TavirajBold',
    fontWeight: 900,
  },
  title: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 13,
    marginBottom: 4,
  },
  viewLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 13,
  },
})

export const ContactInfo = ({ personal, links }) => {
  const { title, firstName, lastName, email } = personal

  const cleanLink = useCallback((link: string) => {
    return link.replace(/^https?:\/\//, '').replace(/^www\./, '')
  }, [])

  return (
    <>
      <Text style={styles.name}>{firstName + ' ' + lastName}</Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.viewLinks}>
        <Link style={styles.link} src={`mailto:${email}`}>
          {email}
        </Link>
        {/* {links.map((item) => (
          <Fragment key={item}>
            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>•</Text>
            <Link style={styles.link} src={item.link}>
              {cleanLink(item.label)}
            </Link>
          </Fragment>
        ))} */}
      </View>
    </>
  )
}
