import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'wheat' }} spacing={2} direction="row" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <CircularProgress color="inherit" size={30}/>
      <div style={{ color: 'wheat', marginLeft: '10px', fontFamily:"Inter" }}>Fetching data</div>
    </Stack>
  );
}