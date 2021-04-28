import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hintAction, initHint, doNothing } from '../reducer'
import Card from './Card'
import { findRoncard } from './functions/findRoncard'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

const Hint = () => {

  const classes = useStyles();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cards, hint } = useSelector(state => state.gameState)

  let trueCards = 
  cards.filter(card => { return card.myHand === true })
  .sort((a, b) => {return a.order - b.order})


  const handlePopoverOpen = (event) => {
    let trueCardsNum = []
    for (let i of trueCards) {
      trueCardsNum.push(i.order)
    }
    let tenpaiCardNum = findRoncard(trueCardsNum)
    console.log(tenpaiCardNum)
    if (tenpaiCardNum.length !== 0) {
      dispatch(hintAction(tenpaiCardNum))
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    dispatch(initHint())
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        variant="contained" color="primary" 
        disabled={trueCards.length !== 13}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        >
        대기패
        </Button>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography className={classes.typography}>
        {
          hint.map((card, i) => {
            return (<Card card={card} key={i} clickCard={doNothing}></Card>)
          })
        }
        </Typography>
      </Popover>
    </div>
  );
}


export default Hint