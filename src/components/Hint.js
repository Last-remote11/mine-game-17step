import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hintAction, initHint, doNothing } from '../actions'
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
  const { cards, hint } = useSelector(state => state.switchHand)
//********************
  // const database = [
  //   1,2,3,4,5,6,7,8,9,
  //   11,12,13,14,15,16,17,18,19,
  //   21,22,23,24,25,26,27,28,29,
  //   31,32,33,34,35,36,37
  // ]
  
  // const beginPair = (tilesCopy, chis, pons, heads) => {
    
  //   if (tilesCopy[0] === tilesCopy[1]) {
  //     heads.push(tilesCopy[0])
  //     return { heads, tilesCopy: tilesCopy.slice(2), chis, pons }
  //   } else {
  //     return { tilesCopy, chis, pons, heads }
  //   }
  // }
  
  // const beginChi = (tilesCopy, chis, pons, heads) => {
  //   var tempArr = [...tilesCopy]
  
  //   let t1 = tempArr[0]
  //   let n = t1 % 10
  //   if (t1 >= 30 || n >= 8) {
  //     return { tilesCopy, chis, pons, heads }
  //   }
  //   let t2 = t1 + 1
  //   let t3 = t1 + 2
  //   if (tempArr.includes(t2) && tempArr.includes(t3)) {
  //     for(var i = 0; i < tempArr.length; i++) { 
  //       if (tempArr[i] === t1) {  
  //         tempArr.splice(i, 1); 
  //         break
  //       }
  //     }
  //     for( var i = 0; i < tempArr.length; i++) { 
  //       if (tempArr[i] === t2) {  
  //         tempArr.splice(i, 1); 
  //         break
  //       }
  //     }
  //     for( var i = 0; i < tempArr.length; i++) { 
  //       if ( tempArr[i] === t3) {  
  //         tempArr.splice(i, 1); 
  //         break
  //       }
  //     }
  //     chis.push(t1)
  //     return { tilesCopy: tempArr, chis, pons, heads }
  //   } else {
  //     return { tilesCopy, chis, pons, heads }
  //   }
  // }
  
  // const beginPon = (tilesCopy, chis, pons, heads) => {
  //   if (tilesCopy.length >= 3 && tilesCopy[0] === tilesCopy[1] && tilesCopy[0] === tilesCopy[2]) {
  //     pons.push(tilesCopy[0])
  //     return { tilesCopy: tilesCopy.slice(3), chis, pons, heads }
  //   } else {
  //     return { tilesCopy, chis, pons, heads }
  //   }
  // }
  
  // const chiPonPair = [beginChi, beginPon, beginPair]
  
  // const dfs = (tilesCopy, queue, depth, chis=[], pons=[],heads=[]) => {
  //   var initialTiles = [...tilesCopy]
  
  //   for (let decom of chiPonPair) {
  //     if (decom === beginPair && queue.includes(beginPair)) {
  //       continue
  //     }
  //     if (depth === 4) {
  //       if (!queue.includes(beginPair) && decom !== beginPair) {
  //         continue
  //       }
  //       for (let i of queue.concat([decom])) {
  //         var {tilesCopy, chis, pons, heads} = i(tilesCopy, chis, pons, heads)
  //       }
  //       if (chis.length + pons.length + heads.length === 5) { // decompose 성공
  //         return { tilesCopy, heads, chis, pons }
  //       } else {
  //         tilesCopy = initialTiles
  //         chis = []
  //         pons = []
  //         heads = []
  //       }
    
  //     } else {
  //       return dfs(tilesCopy, queue.concat([beginChi]), depth+1)
  //       || dfs(tilesCopy, queue.concat([beginPon]), depth+1)
  //       || dfs(tilesCopy, queue.concat([beginPair]), depth+1)
  //     }
  //   }
  // }
  
  // const decomposeRegular = (tiles) => {
  
  //   var tilesCopy = [...tiles]
  
  //   try {
  //     var { tilesCopy, chis, pons, heads } = dfs(tilesCopy, [], 0)
  //   } catch {
  //     var tilesCopy = 'cannot decompose'
  //     var heads = []
  //   }
  
  //   if (heads.length === 1) {
  //     return { heads, chis, pons }
  //   } else {
  //     return false // not regular
  //   }
  // }
  
  // const chitoi = (tiles) => {
  
  //   let setOfTilesArr = [...new Set(tiles)]
  
  //   for (var i = 0; i < 7; i++) {
  //     if (tiles[i*2] === tiles[i*2 + 1]) {
  //       continue
  //     } else {
  //       return false
  //     }
  //   }
  //   if (setOfTilesArr.length !== 7) { // 안깡 X
  //     return false
  //   }
  //   return 'chitoi'
  // }
  
  // const findRoncard = (tiles) => {
  //   let ronCards = [] 
  //   for (let cardNumber of database) {
  //     let tilesCopy = [...tiles]
  //     tilesCopy.push(cardNumber)
  //     tilesCopy.sort((a, b) => {
  //       return a - b;
  //     });
  //     if (decomposeRegular(tilesCopy)) {
  //       console.log(decomposeRegular(tilesCopy), '대기',cardNumber)
  //       ronCards.push(cardNumber)
  //     }
  //     if (chitoi(tilesCopy)) {
  //       ronCards.push(cardNumber)
  //     }
  //   }
  //   return ronCards
  // }
  //********************

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
  const id = open ? 'simple-popover' : undefined;

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
            return (<Card card={card} key={i} switchHand={doNothing}></Card>)
          })
        }
        </Typography>
      </Popover>
    </div>
  );
}


export default Hint