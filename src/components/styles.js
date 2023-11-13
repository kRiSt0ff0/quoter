  export const commonStyles = {

    logoXL: {
        width: '220px',
        height: 'auto',
        margin: '30px 0',
      },

    /* PDF FORM*/
    pdfMakerContainer: {
        margin: '0 auto',
        flexDirection: 'column',
        display: 'flex',
        width: 1200,
        alignItems: 'center',
        },
        pdfMaker: {
          textAlign: 'center',
          display: 'flex',
          margin: '0 0 0 50px',
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
    
  };