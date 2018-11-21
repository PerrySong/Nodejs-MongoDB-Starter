import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import Logo from 'react-svgporn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Repo.css'

const styles = theme => ({
  
  techs: {
    textItems: 'left'
  },
    card: {
    maxWidth: 400,
  },
  media: {
    height: 70,
    paddingTop: '60%',
  },
  actions: {
    display: 'flex',
  },
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
    marginRight: -8,
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[800],
  },
});

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTech:true
    }
  }
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  hoverTech = () => {
    this.setState({showTech:!this.state.showTech})
  }

  render() {
    const { classes } = this.props;
    // console.log(this.state.showTech);
    // console.log(this.props.techs)
    return (
      <Grid item md={4}>
        <Card className={classes.card} >
          <CardHeader
            avatar={
                <Avatar aria-label="tech" className={classes.avatar}>
                  {this.props.links && this.props.links[0] && this.props.name ? this.props.name : '?'}
                </Avatar>
            }
            action={
              <IconButton onClick={this.hoverTech}>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.name}
            subheader={this.props.time}
          />
          {this.state.showTech && this.props.techs && 
            
            <div>
              {this.props.techs.map((tech, i) => {
                return <span className='techs' key={i}><Logo name={tech} width={25}/></span>
              })}
            </div>
          }
          {this.props.image ?
            <CardMedia
              className={classes.media}
              image={this.props.image}
              title=""
            /> :
            <CardMedia
              className={classes.media}
              image="https://imgur.com/a/v5n2NRU"
              title=""
            /> 
        }
          <CardContent>
            <Typography component="p">
              {this.props.desc}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            {this.props.links && 
              this.props.links.map((link, i) => {
                return <a href={link.href} key={i}>{link.name}</a>
              })}
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {this.props.highlights && 
                <div>
                  <Typography paragraph>Hightlights</Typography>
                  {this.props.highlights.map(highlight => {
                    return <Typography className='paragraph' paragraph>{highlight}</Typography>
                  })}
                </div>
              }
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

Repo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Repo);