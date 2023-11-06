import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onSignatureChange }) => {
  const signatureCanvasRef = useRef(null);

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
    onSignatureChange('');
  };

  const saveSignature = () => {
    const signatureData = signatureCanvasRef.current.toDataURL();
    onSignatureChange(signatureData);
  };

  return (
    <div>
      <SignatureCanvas
        ref={signatureCanvasRef}
        canvasProps={{ width: 400, height: 200 }}
      />
      <button onClick={clearSignature}>Borrar Firma</button>
      <button onClick={saveSignature}>Guardar Firma</button>
    </div>
  );
};

export default SignaturePad;
