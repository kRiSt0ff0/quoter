import { StyleSheet } from '@react-pdf/renderer';

export const documentPDFStyles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
      },
      header: {
        justifyContent: 'space-between',
        margin: '0 0 50 0',
        position: 'absolute',
        backgroundColor: '#051c2c',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
      },
      logo: {
        width: '150px',
        height: 'auto',
        margin: '0 0 0 30',
      },
      slogan: {
        width: '100px',
        height: 'auto',
        margin: '0 30 0 0',
        padding:'10',
      },
      headerInfo: {
        fontSize: 10,
        textAlign: 'left',
        margin:'50 0 30 0',
        lineHeight: 1.5,
      },  
      container: {
        padding: 40,
        margin: '10 0 0 0',
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#97c0b5',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      column: {
        flex: 1,
      },
      qr: {
        width: 50,
        margin: '0 0 0 30'
      },
      linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      link: {
        color: '#0073e6', // Color de enlace personalizado
      },
      icon: {
        width: 20,
        margin: '5',
        textAlign: 'center',
      },
      contact: {
        fontSize: 9,
        textAlign: 'right',
        margin: '0 30 0 0',
        lineHeight: 1.5,
      },
      table: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#d3e0dc' ,
      },
      tableHeader: {
        backgroundColor: '#051c2c', // Color de fondo del encabezado
        color: '#FFF', // Color de texto del encabezado
      },
      tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      tableCell: {
        flex: 1,
        padding: 5,
      },
      text: {
        fontSize: 12,
        margin: 10,
      },
      totals: {
        width: '100%',
        textAlign: 'right',
        lineHeight: .3,
        fontSize: 10,
      },
      terms: {
        justifyContent: 'space-between',
        fontSize: 7,
        lineHeight: 1.5,
        padding: 0,
        width: '100%',
      },
  });