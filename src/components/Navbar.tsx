import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar = ({ darkMode, onToggleTheme }: NavbarProps) => {
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
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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
          <IconButton onClick={onToggleTheme} color="primary">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
