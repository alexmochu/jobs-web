import { Fragment, useCallback } from 'react'
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  nameTitle: {
    backgroundColor: 'white',
    color: 'black',
    alignSelf: 'center',
    fontSize: 13,
    marginBottom: 4,
  },
  viewLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
      <Text style={styles.nameTitle}>{firstName + ' ' + lastName}</Text>
      <Text style={styles.nameTitle}>{title}</Text>
      <View style={styles.viewLinks}>
        <Link style={styles.link} src={`mailto:${email}`}>
          {email}
        </Link>
        {links.map((item) => (
          <Fragment key={item}>
            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>•</Text>
            <Link style={styles.link} src={item.link}>
              {cleanLink(item.label)}
            </Link>
          </Fragment>
        ))}
      </View>
    </>
  )
}
