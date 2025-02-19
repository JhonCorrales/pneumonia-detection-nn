import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 8,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)'
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 0 } }}>
                <LocalHospitalIcon 
                  sx={{ 
                    fontSize: 60, 
                    color: '#1976d2',
                    mb: 2 
                  }} 
                />
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: '#1976d2'
                  }}
                >
                  Sistema de Detección de Neumonía
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                  Utiliza inteligencia artificial para analizar radiografías de tórax
                  y asistir en la detección temprana de neumonía.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://static.nationalgeographic.es/files/styles/image_3200/public/m2400651-pneumonia.jpg?w=1600&h=1915"
                alt="Radiografía de pulmón"
                sx={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
            <Typography variant="body1" color="text.secondary" align="center">
              Este sistema utiliza modelos avanzados de deep learning para proporcionar
              un análisis rápido y preciso de las imágenes radiográficas.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
