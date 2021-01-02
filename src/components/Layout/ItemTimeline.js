import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { makeStyles, Typography } from '@material-ui/core'
import destination from '../../Assets/destination.svg';
import warehouse from '../../Assets/warehouse.svg'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'auto',
    minWidth: 'auto',
    align: 'left',
  },
  timeline: {
    width: 'auto'
  },
  cardStyle: {
    shadow: 'none'
  },
  paperStyleSelected : {
    backgroundColor: '#c8e6c9',
    color: "#4caf50",
    padding: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  paperStyle : {
    padding: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  oppositeContent: {
    flex: 0
  }
}));

export default function ItemTimeline({scanData}) {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square>
    <Timeline className={classes.root}>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} />
        <TimelineSeparator>
          <img src={destination} alt="destination" />
          <TimelineConnector />     
        </TimelineSeparator>
        <TimelineContent>
          <div className={classes.cardStyle}>
              <Typography>
              </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
      {
        scanData.map((scan) => {
          return(
            <TimelineItem>
              <TimelineOppositeContent className={classes.oppositeContent} />
              <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper variant="outlined" square className={scan['status_detail'] === 'DELIVERED'? classes.paperStyleSelected : classes.paperStyle}>
                  <Typography>
                    {scan['status_detail']}
                  </Typography>
                  <Typography>
                    {scan['time']}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )
        })
      }
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} />        
        <TimelineSeparator>
          <img src={warehouse} alt="warehouse" />
        </TimelineSeparator>
        <TimelineContent>
          <div className={classes.cardStyle}>
              <Typography>
              </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Paper>
  );
}