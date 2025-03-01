import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  CircularProgress,
  Alert,
  Container
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Detection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setError(null);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setError('Por favor seleccione un archivo de imagen válido');
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Por favor seleccione un archivo de imagen válido');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
        // Remove any custom headers to let the browser handle CORS
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setResult(`${data.diagnosis} (Probabilidad: ${(data.probability * 100).toFixed(2)}%)`);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al procesar la imagen. Por favor intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Detección de Neumonía
        </Typography>
        
        <Box
          sx={{
            border: '2px dashed',
            borderColor: 'primary.main',
            borderRadius: 2,
            p: 3,
            mt: 3,
            textAlign: 'center',
            cursor: 'pointer',
            bgcolor: 'background.default',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept="image/*"
          />
          <CloudUploadIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography>
            {preview ? 'Cambiar imagen' : 'Arrastra una imagen aquí o haz clic para seleccionar'}
          </Typography>
        </Box>

        {preview && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <img 
              src={preview} 
              alt="Preview" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '300px', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} 
            />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={!selectedFile || loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Procesando...' : 'Analizar Imagen'}
          </Button>
        </Box>

        {result && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Resultado: {result}
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default Detection;
