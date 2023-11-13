import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import DocumentPDF from './DocumentPDF';
import ServiceForm from './ServiceForm';
import { commonStyles} from './styles';


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

    return (
      <div style={commonStyles.pdfMakerContainer}>
        <img src="../images/logo-b.png" alt='logo' style={commonStyles.logoXL}></img>  
      <div style={commonStyles.pdfMaker}>
        <div style={commonStyles.formContainer}>
        <h1>Cotizador</h1>
        <br />
        <div>
          <TextField variant="outlined" style={commonStyles.textFieldStyle}
            label="Nombre del Proyecto:"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)} />
          <TextField variant="outlined" style={commonStyles.textFieldStyle}
            label="Tipo de servicio:"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)} />
          <TextField variant="outlined" style={commonStyles.textFieldStyle}
            label="Tipo de inmueble:"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)} />
          <TextField  variant="outlined" style={commonStyles.textFieldStyle}
            label="Ubicación"
            value={location}
            onChange={(e) => setLocation(e.target.value)} />
          <TextField  variant="outlined" style={commonStyles.textFieldStyle}
            label="Valor de operación:"
            value={operationValue}
            onChange={(e) => setOperationValue(e.target.value)} />
          <TextField  variant="outlined" style={commonStyles.textFieldStyle}
            label="Valor de catrastal:"
            value={cadastralValue}
            onChange={(e) => setCadastralValue(e.target.value)} />
          <hr></hr>
          <br />
        </div>
        <ServiceForm
            services={services}
            handleServiceChange={handleServiceChange}
            removeService={removeService}
            addService={addService}
          />
          <TextField id="outlined-basic" variant="outlined" style={commonStyles.textFieldStyle}
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
        </div>
        <hr></hr>
        <div style={commonStyles.pdfPreviewContainer}>
          <PDFDownloadLink document={<DocumentPDF {...{ projectName, serviceType, propertyType, location, operationValue, cadastralValue, services, discount, calculateSubtotal, calculateTotalWithDiscount, calculateIva }} />} fileName="cotizacion.pdf">
            {({ url, loading, error }) => loading ? 'Generando PDF...' : 'Descargar PDF'}
          </PDFDownloadLink>
          <PDFViewer width={400} height={500}>
            <DocumentPDF {...{ projectName, serviceType, propertyType, location, operationValue, cadastralValue, services, discount, calculateSubtotal, calculateTotalWithDiscount, calculateIva }} />
          </PDFViewer>
        </div>
      </div>
      <p>Todos los derechos reservados</p>
      </div>
    );
  };

  export default ProjectForm;