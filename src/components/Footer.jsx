import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #2c3e50, #1a252f)', color: '#fff', p: 2, textAlign: 'center', mt: 'auto', boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.2)' }}>
      <Typography variant="body2" sx={{ mb: 1 }}>Зв'яжіться зі мною:</Typography>
      <Box>
        <Link href="https://github.com/kolyaman" color="inherit" sx={{ mx: 1, '&:hover': { color: '#ffd700', textDecoration: 'underline' } }}>
          GitHub
        </Link>
        <Link href="www.linkedin.com/in/manuilenko" color="inherit" sx={{ mx: 1, '&:hover': { color: '#ffd700', textDecoration: 'underline' } }}>
          LinkedIn
        </Link>
        <Link href="kn23-m.manuilenko@nubip.edu.ua" color="inherit" sx={{ mx: 1, '&:hover': { color: '#ffd700', textDecoration: 'underline' } }}>
          Email
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;