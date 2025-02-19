import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import DiagnosisChart from '../components/DiagnosisChart';
import ResultStats from '../components/ResultStats';

const ResultsPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center" color="primary">
          Resultados y Estadísticas
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <DiagnosisChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <ResultStats />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResultsPage;
