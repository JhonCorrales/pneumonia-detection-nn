import { Box, Typography, LinearProgress } from '@mui/material';

const ResultStats = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Estadísticas del Modelo
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Precisión del modelo
        </Typography>
        <LinearProgress variant="determinate" value={92} sx={{ mt: 1 }} />
        <Typography variant="caption" color="text.secondary">
          92%
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Sensibilidad
        </Typography>
        <LinearProgress variant="determinate" value={89} sx={{ mt: 1 }} />
        <Typography variant="caption" color="text.secondary">
          89%
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultStats;
