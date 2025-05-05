import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(90deg, #2c3e50, #3498db)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', animation: 'slideIn 0.8s ease-out' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Моє портфоліо
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/about" sx={{ '&:hover': { color: '#ffd700', transform: 'scale(1.1)' } }}>
            Про мене
          </Button>
          <Button color="inherit" component={Link} to="/my-city" sx={{ '&:hover': { color: '#ffd700', transform: 'scale(1.1)' } }}>
            Моє місто
          </Button>
          <Button color="inherit" component={Link} to="/my-future" sx={{ '&:hover': { color: '#ffd700', transform: 'scale(1.1)' } }}>
            Мій розвиток
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;