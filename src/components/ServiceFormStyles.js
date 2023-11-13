import { StyleSheet } from '@react-pdf/renderer';

export const serviceFormStyles = StyleSheet.create({
    /*ServiceFormStyles*/ /* LOGO XL*/
  
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
  
  });