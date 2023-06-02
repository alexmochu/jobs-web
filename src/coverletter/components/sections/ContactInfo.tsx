import { useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Link
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  nameTitle: {
    backgroundColor: 'white',
    color: 'black',
    alignSelf: 'center',
    fontSize: 13,
    marginBottom: 4
  },
  viewLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 13
  },
});

export const ContactInfo = ({state}) => {
  const { fullName, title, email, onlineLink, otherLinks } = state
  const cleanLink = useCallback((link: string) => {
    return link.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }, []);

  return (
    <>
      <Text style={styles.nameTitle}>{fullName}</Text>
      <Text style={styles.nameTitle}>{title}</Text>
        <View style={styles.viewLinks}>
      <Link style={styles.link} src={`mailto:${email}`}>{email}
        </Link>
      {otherLinks && (
        <>
          <Text style={{ paddingLeft: 10, paddingRight: 10 }}>•</Text>
          <Link style={styles.link} src={otherLinks}>{cleanLink(otherLinks)}</Link>
        </>
      )}
      {onlineLink && (
        <>
          <Text style={{ paddingLeft: 10, paddingRight: 10 }}>•</Text>
          <Link style={styles.link} src={onlineLink}>{cleanLink(onlineLink)}</Link>
        </>
      )}
      </View>
    </>
  );
};