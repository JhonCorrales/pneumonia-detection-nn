import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <LocalHospitalIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" color="primary" component={Link} to="/" sx={{ textDecoration: 'none' }}>
            DetectPneumonia
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            color="primary"
            variant={location.pathname === '/' ? 'contained' : 'text'}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/upload"
            color="primary"
            variant={location.pathname === '/upload' ? 'contained' : 'text'}
          >
            Detección
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
