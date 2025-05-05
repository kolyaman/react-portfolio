import { Box, Typography, Button, Grid, Container } from '@mui/material';

const MyCity = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <Box
            sx={{
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
              Моє місто
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#ecf0f1', lineHeight: 1.8, mb: 2 }}>
              Мене звати Микола, я живу в місті Дніпро. Це красиве місто, розташоване на березі річки Дніпро. Тут є багато парків, скверів та історичних місць, які надихають мене на творчість.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: '#ecf0f1', lineHeight: 1.8, mb: 2 }}>
              Одне з моїх улюблених місць — це парк імені Тараса Шевченка, де я люблю гуляти і насолоджуватися природою. Також мене вражає архітектура центру міста, особливо вечорами.
            </Typography>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Box
                sx={{
                  height: 300,
                  width: '100%',
                  maxWidth: 600,
                  mx: 'auto',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://itinery.com.ua/img/articles/article_20170617_151817.jpeg"
                  alt="Дніпро"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Typography variant="body1" sx={{ color: '#ecf0f1', lineHeight: 1.8, mt: 3 }}>
                Дніпро — це місто, де поєднуються сучасність і історія.
              </Typography>

              <Button
                variant="outlined"
                href="https://uk.wikipedia.org/wiki/Дніпро"
                target="_blank"
                sx={{
                  mt: 2,
                  color: '#ecf0f1',
                  borderColor: '#3498db',
                  '&:hover': { background: '#3498db', color: '#fff' },
                  transition: 'all 0.3s ease',
                }}
              >
                Дізнатися більше
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyCity;
