import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cs from 'classnames';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...!!';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cs(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom><strong>Infected</strong></Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cs(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom><strong>Recovered</strong></Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of patients recovered from covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cs(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom><strong>Deaths</strong></Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
