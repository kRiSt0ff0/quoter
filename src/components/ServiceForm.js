import React from 'react';
import { TextField, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { serviceFormStyles } from './ServiceFormStyles';

const ServiceForm = ({ services, handleServiceChange, removeService, addService }) => (
    <>
      {services.map((service, index) => (
            <div style={serviceFormStyles.service} key={index}>
              <TextField  variant="outlined" style={serviceFormStyles.serviceField}
                label="Nombre del Servicio"
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)} />
              <TextField  variant="outlined" style={serviceFormStyles.serviceField}
                label="Costo del Servicio"
                value={isNaN(service.cost) ? '' : service.cost} // Convertir a cadena vacía si es NaN
                onChange={(e) => handleServiceChange(index, 'cost', parseFloat(e.target.value))} />
              <div style={serviceFormStyles.deleteIconContainer}>
                <DeleteIcon style={serviceFormStyles.deleteIcon} onClick={() => removeService(index)} />
              </div>
            </div>
          ))}
          <Button style={serviceFormStyles.addService} variant="contained" color="primary" onClick={addService}>
            Agregar Servicio
          </Button>
          <br />
          <hr></hr>
          <h4>Otorgar descuento</h4>
          </>
  );
  
  export default ServiceForm;