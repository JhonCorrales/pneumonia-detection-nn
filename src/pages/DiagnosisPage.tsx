import { Container, Typography, Box } from '@mui/material';
import Detection from '../components/Detection';

const DiagnosisPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center" color="primary">
          Diagnóstico de Neumonía
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Sube una radiografía de tórax para realizar el análisis
        </Typography>
        <Detection />
      </Box>
    </Container>
  );
};

export default DiagnosisPage;
