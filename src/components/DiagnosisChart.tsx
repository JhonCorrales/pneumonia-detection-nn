import { Box, Typography } from '@mui/material';
import { PieChart } from 'recharts';

const DiagnosisChart = () => {
  const data = [
    { name: 'Neumonía', value: 85, color: '#ff4444' },
    { name: 'Normal', value: 15, color: '#44ff44' },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Distribución de Diagnósticos
      </Typography>
      <PieChart width={400} height={400}>
        {/* Add your chart configuration here */}
      </PieChart>
    </Box>
  );
};

export default DiagnosisChart;
