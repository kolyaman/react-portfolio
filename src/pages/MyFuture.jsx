import { Box, Typography, Divider} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const MyFuture = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        p: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05), rgba(41, 128, 185, 0.05))',
        borderRadius: 3,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        color: '#ecf0f1',
        fontFamily: '"Inter", sans-serif',
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#3498db', fontWeight: 700, letterSpacing: '0.5px', mb: 4 }}
      >
        Мій розвиток
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
          py: 4,
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '42px',
            left: '10%',
            right: '10%',
            borderTop: '2px solid #3498db',
            zIndex: 0,
          },
        }}
      >
        {/* 2025 */}
        <Box sx={{ textAlign: 'center', flex: 1, position: 'relative', px: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              background: '#3498db',
              borderRadius: '50%',
              mx: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              position: 'relative',
              boxShadow: '0 0 10px rgba(52, 152, 219, 0.5)',
            }}
          >
            <StarIcon sx={{ color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
            2025
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, maxWidth: 160, mx: 'auto' }}>
            Оволодіти Blender і ZBrush на професійному рівні.
          </Typography>
        </Box>

        {/* 2026 */}
        <Box sx={{ textAlign: 'center', flex: 1, position: 'relative', px: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              background: '#3498db',
              borderRadius: '50%',
              mx: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              position: 'relative',
              boxShadow: '0 0 10px rgba(52, 152, 219, 0.5)',
            }}
          >
            <SchoolIcon sx={{ color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
            2026
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, maxWidth: 160, mx: 'auto' }}>
            Вивчити анатомію людини для персонажів.
          </Typography>
        </Box>

        {/* 2027 */}
        <Box sx={{ textAlign: 'center', flex: 1, position: 'relative', px: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              background: '#3498db',
              borderRadius: '50%',
              mx: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              position: 'relative',
              boxShadow: '0 0 10px rgba(52, 152, 219, 0.5)',
            }}
          >
            <WorkIcon sx={{ color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
            2027
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, maxWidth: 160, mx: 'auto' }}>
            Працювати в міжнародній IT-компанії.
          </Typography>
        </Box>
      </Box>

      {/* Цитата */}
      <Divider sx={{ my: 5, borderColor: 'rgba(52, 152, 219, 0.3)' }} />
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Мотивація
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          color: '#ecf0f1',
          lineHeight: 1.8,
          background: 'rgba(255,255,255,0.05)',
          borderLeft: '4px solid #3498db',
          pl: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        "Успіх — це рух від невдачі до невдачі без втрати ентузіазму." — Вінстон Черчилль
      </Typography>

      {/* Робота мрії */}
      <Divider sx={{ my: 5, borderColor: 'rgba(52, 152, 219, 0.3)' }} />
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Робота мрії
      </Typography>
      <Typography variant="body1" sx={{ color: '#ecf0f1', lineHeight: 1.8, mb: 3 }}>
        Моя робота мрії — це позиція 3D-моделера, який створює моделі для фільмів, ігор або реклами.
        Я хочу працювати в команді, де зможу вчитись, вирішувати складні задачі та створювати продукти, якими пишаюсь.
      </Typography>
    </Box>
  );
};

export default MyFuture;
