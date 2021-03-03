import { Typography, Link, Box } from '@material-ui/core'

function Footer() {
    return (
        <Box mt={2}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://facebook.com/utsho.aiub/">
                    ALif Shahriar Utsho
            </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

export default Footer