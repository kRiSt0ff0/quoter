import React from 'react';
import { Page, Text, Document, View, Image, Link } from '@react-pdf/renderer';
import { documentPDFStyles } from './DocumentPDFStyles';


const DocumentPDF = ({ projectName, serviceType, propertyType, location, operationValue, cadastralValue, services, discount, calculateSubtotal, calculateTotalWithDiscount, calculateIva }) => (
    <Document style={documentPDFStyles.document}>
    <Page size="A4" style={documentPDFStyles.page}>
    <View style={documentPDFStyles.header}>
        <Image src="../images/logo.png" style={documentPDFStyles.logo} />
        <Image src="../images/slogan.png" style={documentPDFStyles.slogan} />
      </View>
      
      <View style={documentPDFStyles.container}>
      <View style={documentPDFStyles.headerInfo}>
        <Text>Nombre de Proyecto: {projectName}</Text>
        <Text>Tipo de servicio: {serviceType}</Text>
        <Text>Tipo de inmueble: {propertyType}</Text>
        <Text>Ubicación: {location}</Text>
        <Text>Valor de operación: {operationValue}</Text>
        <Text>Valor de catastral: {cadastralValue}</Text>
      </View>
      <View style={documentPDFStyles.table}>
        {/* Cabecera de la tabla */}
        <View style={[documentPDFStyles.tableRow, documentPDFStyles.tableHeader]}>
          <View style={documentPDFStyles.tableCell}>
            <Text style={documentPDFStyles.text}>Nombre del Servicio</Text>
          </View>
          <View style={documentPDFStyles.tableCell}>
            <Text style={documentPDFStyles.text}>Costo</Text>
          </View>
        </View>
        
      {/* Datos de los servicios en la tabla */}
      {services && services.length > 0 ? (
        services.map((service, index) => (
          <View style={documentPDFStyles.tableRow} key={index}>
            <View style={documentPDFStyles.tableCell}>
            <Text style={documentPDFStyles.text}>{service.name} </Text></View>
            <View style={documentPDFStyles.tableCell}><Text style={documentPDFStyles.text}> ${service.cost}</Text></View>
          </View>
        ))
        
      ) : (
        <Text style={documentPDFStyles.text}>No se han agregado servicios</Text>
      )}
      </View>

      <View style={documentPDFStyles.tableRow}>
      <View style={documentPDFStyles.tableCell}>
          <Text style={documentPDFStyles.terms}> 
          TÉRMINOS Y CONDICIONES{'\n'}{'\n'}
          1. Esta cotización es un estimado basado en la información que al momento tenemos y puede ser
          variable, estimado en pesos.{'\n'}
          2. La vigencia de la cotización tendrá una duración de un mes a partir de su expedición.{'\n'}
          3. La forma y medio de pago se convendrá por separado, así como al caso particular del solicitante.{'\n'}
          4. Por este medio se autoriza a Jiro Abogados a realizar los gastos antes{'\n'}</Text>
        </View>
        <View style={documentPDFStyles.tableCell}>
          <View style={documentPDFStyles.totals}>
            <Text style={documentPDFStyles.text}>Subtotal: ${calculateSubtotal()}</Text>
            <Text style={documentPDFStyles.text}>Descuento ({discount}%): -${(calculateSubtotal() - calculateTotalWithDiscount()).toFixed(2)}</Text>
            <Text style={documentPDFStyles.text}>IVA (16%): ${calculateIva()}</Text>
            <Text style={documentPDFStyles.text}>Total: ${calculateTotalWithDiscount()}</Text>
          </View>
        </View>
      </View>
      </View>
      {/* Footer con tres columnas */}
      <View style={documentPDFStyles.footer}>
        <View style={documentPDFStyles.column}>
        <Image src="../images/qr.png" style={documentPDFStyles.qr} />
        </View>
        <View style={[documentPDFStyles.column, documentPDFStyles.linkContainer]}>
          <Link src="https://www.facebook.com" style={documentPDFStyles.link}><Image src="../images/facebook.png" style={documentPDFStyles.icon} /></Link>
          {' | '}
          <Link src="https://www.instagram.com" style={documentPDFStyles.link}><Image src="../images/instagram.png" style={documentPDFStyles.icon} /></Link>
          {' | '}
          <Link src="https://www.linkedin.com" style={documentPDFStyles.link}><Image src="../images/linkedin.png" style={documentPDFStyles.icon} /></Link>
          {' | '}
          <Link src="https://www.google.com" style={documentPDFStyles.link}><Image src="../images/google.png" style={documentPDFStyles.icon} /></Link>
          {' | '}
          <Link src="https://www.whatsapp.com" style={documentPDFStyles.link}><Image src="../images/whatsapp.png" style={documentPDFStyles.icon} /></Link>
        </View>
        <View style={[documentPDFStyles.column,documentPDFStyles.contact]}>
          <Text>www.jiroabogados.com{'\n'}3315626398 / 3315626422{'\n'}contacto@jiroabogados.com{'\n'}Justo Sierra 2725, Vallarta Norte{'\n'}C.P. 44690 Guadalajara, Jalisco</Text>
        </View>
      </View>

    </Page>
  </Document>
);


export default DocumentPDF;