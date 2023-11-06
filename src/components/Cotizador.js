import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PDFDownloadLink, PDFViewer, Page, Text, Document, View, StyleSheet, Image, Link } from '@react-pdf/renderer';

import DeleteIcon from '@mui/icons-material/Delete';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [operationValue, setOperationValue] = useState('');
  const [cadastralValue, setCadastralValue] = useState('');
  const [services, setServices] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addService = () => {
    setServices([...services, { name: '', cost: 0 }]);
  };

  const handleServiceChange = (index, property, value) => {
    const updatedServices = [...services];
    updatedServices[index][property] = value;
    setServices(updatedServices);
  };

  const calculateSubtotal = () => {
    return services.reduce((acc, service) => acc + service.cost, 0).toFixed(2);
  };

  const calculateTotalBeforeDiscount = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * 1.16).toFixed(2);
  };

  const calculateTotalWithDiscount = () => {
    const totalBeforeDiscount = calculateTotalBeforeDiscount();
    return (totalBeforeDiscount * (1 - discount / 100)).toFixed(2);
  };

  const calculateIva = () => {
    const totalBeforeDiscount = calculateTotalBeforeDiscount();
    return (totalBeforeDiscount - calculateSubtotal()).toFixed(2);
  };

 // const calculateTotal = () => {
   // return calculateTotalWithDiscount();
 // };

   const removeService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  // Define un tema personalizado
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background:'rgba(200, 200, 200, 0.5)', // Cambia el color de fondo de todos los TextField
          borderRadius: '5px',
          '& fieldset': {
            borderColor: '#fff', // Cambia el color del borde a verde
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
        },
    },
}}});

  const styles = StyleSheet.create({
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

    /* LOGO XL*/

    logoXL: {
      width: '150px',
      height: 'auto',
      margin: '0 0 0 30',
    },
    containerlogoXL:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    /* PDF FORM*/
    pdfMaker: {
      textAlign: 'center',
      display: 'flex',
      margin: '40px auto',
      width: 1000,
      borderRadius: 10,
      boxShadow: '5px 5px 20px 10px rgba(0, 0, 0, .2)',
      backdropFilter: 'url(filters.svg#filter) blur(10px) saturate(200%)',
      
    },
     formContainer: {
      flex: 1,
      padding: 20,
      borderRadius: '10px 0 0 10px',
      margin: -1,
     },
     pdfPreviewContainer: {
       flex: 1,
       padding: 20,
       borderRadius: '0 10px 10px 0',
       margin: -1,
     },
     textFieldStyle: {
      margin: 10,
     },

     /* Service */

     service: {
      display: 'flex',
      padding: '0 20px',
      /*backgroundColor: '#cdcdcd',*/
      borderRadius: '10px 0 0 10px',
      margin: -1,
     },
     serviceField: {
      flex: 1,
      margin: 10,
     },
     addService: {
      margin: '10px 0',
     },
     deleteIconContainer:{
      display: 'flex',
      alignItems: 'center',
     },
     deleteIcon:{
      cursor: 'pointer',
     }

      /* Discount */


  });

  const DocumentPDF = () => (
    <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.header}>
        <Image src="../images/logo.png" style={styles.logo} />
        <Image src="../images/slogan.png" style={styles.slogan} />
      </View>
      
      <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text>Nombre de Proyecto: {projectName}</Text>
        <Text>Tipo de servicio: {serviceType}</Text>
        <Text>Tipo de inmueble: {propertyType}</Text>
        <Text>Ubicación: {location}</Text>
        <Text>Valor de operación: {operationValue}</Text>
        <Text>Valor de catastral: {cadastralValue}</Text>
      </View>
      <View style={styles.table}>
        {/* Cabecera de la tabla */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={styles.tableCell}>
            <Text style={styles.text}>Nombre del Servicio</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.text}>Costo</Text>
          </View>
        </View>
        
      {/* Datos de los servicios en la tabla */}
      {services && services.length > 0 ? (
        services.map((service, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCell}>
            <Text style={styles.text}>{service.name} </Text></View>
            <View style={styles.tableCell}><Text style={styles.text}> ${service.cost}</Text></View>
          </View>
        ))
        
      ) : (
        <Text style={styles.text}>No se han agregado servicios</Text>
      )}
      </View>

      <View style={styles.tableRow}>
      <View style={styles.tableCell}>
          <Text style={styles.terms}> 
          TÉRMINOS Y CONDICIONES{'\n'}{'\n'}
          1. Esta cotización es un estimado basado en la información que al momento tenemos y puede ser
          variable, estimado en pesos.{'\n'}
          2. La vigencia de la cotización tendrá una duración de un mes a partir de su expedición.{'\n'}
          3. La forma y medio de pago se convendrá por separado, así como al caso particular del solicitante.{'\n'}
          4. Por este medio se autoriza a Jiro Abogados a realizar los gastos antes{'\n'}</Text>
        </View>
        <View style={styles.tableCell}>
          <View style={styles.totals}>
            <Text style={styles.text}>Subtotal: ${calculateSubtotal()}</Text>
            <Text style={styles.text}>Descuento ({discount}%): -${(calculateSubtotal() - calculateTotalWithDiscount()).toFixed(2)}</Text>
            <Text style={styles.text}>IVA (16%): ${calculateIva()}</Text>
            <Text style={styles.text}>Total: ${calculateTotalWithDiscount()}</Text>
          </View>
        </View>
      </View>
      </View>
      {/* Footer con tres columnas */}
      <View style={styles.footer}>
        <View style={styles.column}>
        <Image src="../images/qr.png" style={styles.qr} />
        </View>
        <View style={[styles.column, styles.linkContainer]}>
          <Link src="https://www.facebook.com" style={styles.link}><Image src="../images/facebook.png" style={styles.icon} /></Link>
          {' | '}
          <Link src="https://www.instagram.com" style={styles.link}><Image src="../images/instagram.png" style={styles.icon} /></Link>
          {' | '}
          <Link src="https://www.linkedin.com" style={styles.link}><Image src="../images/linkedin.png" style={styles.icon} /></Link>
          {' | '}
          <Link src="https://www.google.com" style={styles.link}><Image src="../images/google.png" style={styles.icon} /></Link>
          {' | '}
          <Link src="https://www.whatsapp.com" style={styles.link}><Image src="../images/whatsapp.png" style={styles.icon} /></Link>
        </View>
        <View style={[styles.column, styles.contact]}>
          <Text>www.jiroabogados.com{'\n'}3315626398 / 3315626422{'\n'}contacto@jiroabogados.com{'\n'}Justo Sierra 2725, Vallarta Norte{'\n'}C.P. 44690 Guadalajara, Jalisco</Text>
        </View>
      </View>

    </Page>
  </Document>
  );

  return (
    <><div style={styles.containerlogoXL}><Image src="../images/logo.png" style={styles.logoXL} /></div>
    <div style={styles.pdfMaker}>
      <div style={styles.formContainer}>
      <h1>Cotizador</h1>
      <ThemeProvider theme={theme}>
        <form>
        <TextField variant="outlined" style={styles.textFieldStyle}
          label="Nombre del Proyecto:"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)} />
        <TextField variant="outlined" style={styles.textFieldStyle}
          label="Tipo de servicio:"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)} />
        <TextField variant="outlined" style={styles.textFieldStyle}
          label="Tipo de inmueble:"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)} />
        <TextField  variant="outlined" style={styles.textFieldStyle}
          label="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)} />
        <TextField  variant="outlined" style={styles.textFieldStyle}
          label="Valor de operación:"
          value={operationValue}
          onChange={(e) => setOperationValue(e.target.value)} />
        <TextField  variant="outlined" style={styles.textFieldStyle}
          label="Valor de catrastal:"
          value={cadastralValue}
          onChange={(e) => setCadastralValue(e.target.value)} />
        <hr></hr>
        {services.map((service, index) => (
          <div style={styles.service} key={index}>
            <TextField  variant="outlined" style={styles.serviceField}
              label="Nombre del Servicio"
              value={service.name}
              onChange={(e) => handleServiceChange(index, 'name', e.target.value)} />
            <TextField  variant="outlined" style={styles.serviceField}
              label="Costo del Servicio"
              value={isNaN(service.cost) ? '' : service.cost} // Convertir a cadena vacía si es NaN
              onChange={(e) => handleServiceChange(index, 'cost', parseFloat(e.target.value))} />
            <div style={styles.deleteIconContainer}>
              <DeleteIcon style={styles.deleteIcon} onClick={() => removeService(index)} />
            </div>
          </div>
        ))}
        <Button style={styles.addService} variant="contained" color="primary" onClick={addService}>
          Agregar Servicio
        </Button>
        <br />
        <hr></hr>
        <h4>Otorgar descuento</h4>
        <TextField id="outlined-basic" variant="outlined" style={styles.textFieldStyle}
          label="Descuento (%)"
          value={discount === 0 ? '' : discount.toString()}
          onChange={(e) => {
            const newDiscount = parseFloat(e.target.value);
            if (!isNaN(newDiscount)) {
              setDiscount(newDiscount);
            } else {
              setDiscount(0); // Establecer descuento a 0 si se borra el campo
            }
          } } />
        <br />
        </form>
</ThemeProvider>
      </div>
      <hr></hr>
      <div style={styles.pdfPreviewContainer}>
        <PDFDownloadLink document={<DocumentPDF />} fileName="cotizacion.pdf">
          {({ url, loading, error }) => loading ? 'Generando PDF...' : 'Descargar PDF'}
        </PDFDownloadLink>
        <PDFViewer width={400} height={500}>
          <DocumentPDF />
        </PDFViewer>
      </div>
    </div></>
  );
};

export default ProjectForm;
