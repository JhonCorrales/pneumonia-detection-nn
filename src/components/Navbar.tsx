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

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/diagnosis', label: 'Diagnóstico' },
    { path: '/results', label: 'Resultados' },
    { path: '/info', label: 'Información' },
  ];

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <LocalHospitalIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component={Link} to="/" 
            sx={{ textDecoration: 'none', color: 'inherit' }}>
            NeumonIA
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              variant={location.pathname === item.path ? 'outlined' : 'text'}
            >
              {item.label}
            </Button>
          ))}
          <IconButton onClick={onToggleTheme} color="inherit" sx={{ ml: 1 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
