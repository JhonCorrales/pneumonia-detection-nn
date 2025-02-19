import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
        color: 'white',
        py: 8,
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Diagnóstico de Neumonía con IA
              </Typography>
              <Typography variant="h5" paragraph>
                Detección temprana mediante análisis de rayos X potenciado por Inteligencia Artificial
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/diagnosis')}
                startIcon={<UploadFileIcon />}
                sx={{ mt: 2, bgcolor: 'white', color: 'primary.main' }}
              >
                Comenzar Diagnóstico
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://static.nationalgeographic.es/files/styles/image_3200/public/m2400651-pneumonia.jpg"
                alt="AI Medical"
                sx={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <LocalHospitalIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Diagnóstico Rápido
              </Typography>
              <Typography color="text.secondary">
                Resultados instantáneos con alta precisión gracias a modelos de IA avanzados.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <BiotechIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Tecnología Avanzada
              </Typography>
              <Typography color="text.secondary">
                Utilizamos modelos de deep learning entrenados con miles de imágenes médicas.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <UploadFileIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Fácil de Usar
              </Typography>
              <Typography color="text.secondary">
                Simplemente sube tu imagen de rayos X y obtén resultados en segundos.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
