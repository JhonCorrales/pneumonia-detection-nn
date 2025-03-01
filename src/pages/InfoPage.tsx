import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BiotechIcon from '@mui/icons-material/Biotech';
import SchoolIcon from '@mui/icons-material/School';

const InfoPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center" color="primary">
          Sobre el Proyecto
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Tecnologías Utilizadas
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Frontend" 
                    secondary="React, TypeScript, Material-UI, React Router Dom, Axios"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StorageIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Backend" 
                    secondary="FastAPI, SQLAlchemy, TensorFlow"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BiotechIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="IA" 
                    secondary="Redes Neuronales Convolucionales, Transfer Learning"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Acerca del Modelo
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Dataset" 
                    secondary="Entrenado con el conjunto de datos Chest X-Ray Images (Pneumonia)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><BiotechIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Capacidades" 
                    secondary="Clasificación binaria: Normal vs Neumonía"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default InfoPage;
