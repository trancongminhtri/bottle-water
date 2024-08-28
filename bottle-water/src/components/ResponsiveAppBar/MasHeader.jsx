import { Container, Toolbar, Box, Autocomplete, TextField, Typography } from "@mui/material";
import logo from '/src/assets/images/logo-small.png';
import { ButtonUtils } from '../../utils/ButtonUtils';
import SearchIcon from '@mui/icons-material/Search';

function MasHeader() {
    const { StyledBadge } = ButtonUtils;
    return (
        <>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-around' }}>
                    <Box
                        component="img"
                        sx={{
                            height: 80,
                            width: 182,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        py={1}
                        alt=""
                        src={logo}>
                    </Box>
                    <Autocomplete
                        id="combo-box-demo"
                        sx={{
                           width: '550px',
                           '& fieldset': { borderRadius: 33 }
                        }}
                        size='small'
                        options={top100Films}
                        popupIcon={<SearchIcon />}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Roboto, sans-serif',
                                fontWeight: 700,
                                color: 'hsla(0, 0%, 40%, .85)',
                                fontSize: '12.8px',
                                '&:hover': {
                                    color: '#334862',
                                },
                                cursor: 'pointer',
                            }}

                        >
                            GIỎ HÀNG / 0đ
                            <StyledBadge badgeContent={4}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 32,
                                        width: 32,
                                        maxHeight: { xs: 32, md: 32 },
                                        maxWidth: { xs: 32, md: 32 },
                                        cursor: 'pointer',
                                    }}
                                    pl={1}
                                    alt=""
                                    src="https://dailynuocleduc.vn/wp-content/uploads/2023/12/cart.png">
                                </Box>
                            </StyledBadge>
                        </Typography>

                    </Box>
                </Toolbar>
            </Container>
        </>
    )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

export default MasHeader