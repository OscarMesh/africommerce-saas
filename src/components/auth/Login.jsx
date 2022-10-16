import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import styled from 'styled-components';

const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 50px;

  td {
    text-align: left;
    padding: 10px;
    border: 1px solid #dddddd;
  }
`;

export default function () {
  const PaperStyle = {
    padding: 25,
    borderRadius: 6,
    width: '80%',
    maxWidth: 500,
    margin: '0 auto',
  };
  return (
    <form>
      <Grid>
        <Paper elevation={2} style={PaperStyle}>
          <Grid align="center">
            <h2 style={{ marginBottom: '30px' }}>Login to your Account</h2>
          </Grid>
          <TextField
            sx={{ marginBottom: '20px' }}
            fullWidth
            label="Email"
            id="fullWidth"
          />
          <TextField
            sx={{ marginBottom: '25px' }}
            type="password"
            fullWidth
            label="Password"
            id="fullWidth"
          />

          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Link href="#" underline="none" color="inherit" align="left">
            Forget Password?
          </Link>

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              marginBottom: '40px',
              fontWeight: 'bold',
              fontSize: '16px',
              textTransform: 'none',
              hover: 'none',
            }}
            fullWidth
            disableElevation
          >
            Login
          </Button>
          <TableStyle>
            <tbody>
              <tr>
                <td>Seller Account</td>
                <td>
                  <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    disableElevation
                  >
                    Copy credentials
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Customer Account</td>
                <td>
                  <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    disableElevation
                  >
                    Copy credentials
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Delivery Boy Account</td>
                <td>
                  <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    disableElevation
                  >
                    Copy credentials
                  </Button>
                </td>
              </tr>
            </tbody>
          </TableStyle>

          <div align="center">
            <Link
              href="#"
              sx={{ display: 'block', marginBottom: '10px' }}
              underline="none"
              color="inherit"
            >
              Dont have an account?
            </Link>
            <Link
              href="#"
              sx={{ display: 'block', color: 'red' }}
              underline="none"
              color="inherit"
            >
              Register Now
            </Link>
          </div>
        </Paper>
      </Grid>
    </form>
  );
}
