import { Document, Page, View, StyleSheet, PDFViewer } from '@react-pdf/renderer'
import { Summary } from './components/sections'
import { useDocumentTitle } from '../hooks'
import './index.css'

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    color: 'black',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, // the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
})

function CoverLetter({ state }) {
  useDocumentTitle()

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size='A4' style={styles.page}>
          <View style={styles.section}>
            <Summary state={state} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default CoverLetter
