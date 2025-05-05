import { Box, Typography, Button, Divider, Grid } from '@mui/material';

const AboutMe = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        p: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.05) 100%)',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        color: '#ecf0f1',
        fontFamily: '"Inter", sans-serif',
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#3498db', fontWeight: 700, letterSpacing: '0.5px', mb: 3 }}
      >
        Про мене
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#ecf0f1', lineHeight: 1.8, mb: 2 }}>
        Привіт! Я Микола, початківець 3д-моделер із Дніпра. Захоплююсь 3d-моделюванням і прагну створювати красиві модельки для ігор чи фільмів.
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#ecf0f1', lineHeight: 1.8, mb: 2 }}>
        Мої цінності: постійне навчання, креативність, відповідальність. У вільний час люблю дивитись фільми, читати комікси, беру з них натхнення), а також гуляти.
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#ecf0f1', lineHeight: 1.8, mb: 2 }}>
        Навчаюсь у Національному університеті біоресурсів і природокористування України на спеціальності "Комп'ютерні науки". Уже маю досвід створення проєктів із HTML, CSS, JavaScript і React.
      </Typography>

      <Divider sx={{ my: 4, borderColor: 'rgba(52, 152, 219, 0.3)' }} />
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: '#3498db', fontWeight: 600, letterSpacing: '0.5px', mb: 3 }}
      >
        Мої проєкти
      </Typography>

      <Grid container spacing={3} alignItems="center">
        {/* HTML + CSS */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#ecf0f1', mb: 1, fontWeight: 500 }}>
            HTML + CSS
          </Typography>
          <Button
            variant="outlined"
            href="https://github.com/kolyaman/css-practice.git"
            target="_blank"
            sx={{
              color: '#ecf0f1',
              borderColor: '#3498db',
              mr: 1,
              '&:hover': { background: '#3498db', color: '#fff' },
              transition: 'all 0.3s ease',
            }}
          >
            Проєкт 1
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/kolyaman/Web-market.git"
            target="_blank"
            sx={{
              color: '#ecf0f1',
              borderColor: '#3498db',
              '&:hover': { background: '#3498db', color: '#fff' },
              transition: 'all 0.3s ease',
            }}
          >
            Проєкт 2
          </Button>
        </Grid>

        {/* JavaScript */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#ecf0f1', mb: 1, fontWeight: 500 }}>
            JavaScript
          </Typography>
          <Button
            variant="outlined"
            href="https://github.com/kolyaman/lab4_Manuilenko.git"
            target="_blank"
            sx={{
              color: '#ecf0f1',
              borderColor: '#3498db',
              mr: 1,
              '&:hover': { background: '#3498db', color: '#fff' },
              transition: 'all 0.3s ease',
            }}
          >
            Проєкт 1
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/kolyaman/lab5_Manuilenko.git"
            target="_blank"
            sx={{
              color: '#ecf0f1',
              borderColor: '#3498db',
              '&:hover': { background: '#3498db', color: '#fff' },
              transition: 'all 0.3s ease',
            }}
          >
            Проєкт 2
          </Button>
        </Grid>

        {/* React */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#ecf0f1', mb: 1, fontWeight: 500 }}>
            React
          </Typography>
          <Button
            variant="outlined"
            href="https://github.com/kolyaman/react-16-th-lab-.git"
            target="_blank"
            sx={{
              color: '#ecf0f1',
              borderColor: '#3498db',
              mr: 1,
              '&:hover': { background: '#3498db', color: '#fff' },
              transition: 'all 0.3s ease',
            }}
          >
            Проєкт 1
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/kolyaman/react-17-lab.git"
            target="_blank"
            sx={{
              color: '#ecf0f1',
              borderColor: '#3498db',
              '&:hover': { background: '#3498db', color: '#fff' },
              transition: 'all 0.3s ease',
            }}
          >
            Проєкт 2
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;