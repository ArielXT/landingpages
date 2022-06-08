import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Links from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    cardHeader: {
        paddingTop: theme.spacing(3),
    },
}));

export default function Pricio(props) {
    const classes = useStyles();

    const content = {
        'badge': 'Puedes cambiar de plan en cualquier momento.',
        'header-p1': 'Green Anime Life',
        'description': 'Disfruta de transmisiones sin anuncios publicitarios de nuestra inmensa biblioteca de opciones subtituladas y dobladas, que ofrecen un variado catálogo de grandes éxitos, títulos favoritos de los fanáticos y clásicos de todos los tiempos, así como las series más recientes estrenadas en Japón.',
        'option1': 'Mensual',
        'option2': 'Anual',
        '01_title': 'AFICIONADO',
        '01_price': 'S/.0',
        '01_suffix': ' / mes',
        '01_benefit1': 'Con publicidad',
        '01_benefit2': 'Acceso ilimitado al catálogo',
        '01_benefit3': 'Esperar 1 Semana despues del estreno',
        '01_benefit4': 'Disponible en 1 dispositivo al mismo tiempo',
        '01_primary-action': 'Elegir plan',
        '01_secondary-action': 'Ver más',
        '02_title': 'MEGA FAN',
        '02_price': 'S/.21',
        '02_suffix': ' / mes',
        '02_benefit1': 'Disponible en 4 dispositivos al mismo tiempo',
        '02_benefit2': 'Acceso ilimitado al catálogo de Anime',
        '02_benefit3': 'Nuevos episodios una hora luego de Japón',
        '02_benefit4': 'Visionado Sin Conexión',
        '02_primary-action': 'Iniciar Plan',
        '02_secondary-action': 'Ver más',
        '03_title': 'FAN',
        '03_price': 'S/.19',
        '03_suffix': ' / mes',
        '03_benefit1': 'Disponible en 1 dispositivo al mismo tiempo',
        '03_benefit2': 'Nuevos episodios una hora luego de Japón',
        '03_benefit3': 'Sin publicidad',
        '03_benefit4': 'Acceso ilimitado al catálogo',
        '03_primary-action': 'Elegir plan',
        '03_secondary-action': 'Ver más',
        ...props.content
    };

    const [state, setState] = React.useState({
        checkbox: true,
    });

    const handleChange = (event) => {
        setState({ ...state, checkbox: event.target.checked });
    };

    return (
        <section className={classes.section}>
            <div className="App2">
            <Container maxWidth="lg">
                <Box py={8} textAlign="center">
                    <Box mb={3}>
                        <Container maxWidth="sm">
                            <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="span" style={{ color: '#2dcb92' , backgroundColor: 'rgba(0,0,0,0.5)'}}>{content['header-p1']} </Typography>
                            </Typography>
                            <Typography variant="subtitle1" paragraph={true}><strong>{content['description']}</strong></Typography>

                            <div>
                                <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
                                &nbsp; <Switch name="checkbox" color="primary" checked={state.checkbox} onChange={handleChange} /> &nbsp;
                                <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
                            </div>
                        </Container>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader title={content['01_title']} className={classes.cardHeader}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>
                                            {content['01_price']}
                                            <Typography variant="h6" color="textSecondary" component="span">{content['01_suffix']}</Typography>
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                                    </Box>
                                    <Button variant="outlined" style={{ color: '#2dcb92' }} className={classes.primaryAction}>{content['01_primary-action']}</Button>
                                    <Box mt={2}>
                                        <Links href="#" style={{ color: '#2dcb92' }}>{content['03_secondary-action']}</Links>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader title={content['02_title']} className={classes.cardHeader}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>
                                            {content['02_price']}
                                            <Typography variant="h6" color="textSecondary" component="span">{content['02_suffix']}</Typography>
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                                    </Box>
                                    <Button
                                        style={{
                                            borderRadius: 35,
                                            backgroundColor: "#2dcb92",
                                            padding: "10px 36px",
                                            fontSize: "12px"
                                        }}
                                        variant="contained"
                                    >{content['02_primary-action']}</Button>
                                    <Box mt={2}>
                                        <Links href="#" style={{ color: '#2dcb92' }}>{content['03_secondary-action']}</Links>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader title={content['03_title']} className={classes.cardHeader}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>
                                            {content['03_price']}
                                            <Typography variant="h6" color="textSecondary" component="span">{content['03_suffix']}</Typography>
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                                        <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                                    </Box>
                                    <Button variant="outlined"style={{ color: '#2dcb92' }}>{content['03_primary-action']}</Button>
                                    <Box mt={2}>
                                        <Links href="#" style={{ color: '#2dcb92' }}>{content['03_secondary-action']}</Links>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Link to={"/"} className="btn btn-info derecho">!Volver al inicio!</Link>
                    </Grid>
                </Box>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        </section>
    );
}