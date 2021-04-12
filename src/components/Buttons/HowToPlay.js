import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60vm',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const getModalStyle = {
  top: '10%',
  left: '30%',
  right:'30%'
}

const HowToPlay = () => {
  
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">게임 방법</h2>
      <p>0. 지뢰 게임 17보는 만화 도박묵시록 카이지에 등장하는 2인용 마작 게임입니다. 여기선 룰을 약간 간소화했습니다.</p>
      <p>1. 게임이 시작되면 자신과 상대는 자기 앞의 패산의 모든 패(34장)를 자신 앞으로 가져옵니다.</p>
      <p>2. 제한시간 3분 이내에 34개의 패 중 적절히 13장의 패를 골라 텐파이 상태를 만듭니다.  이 때 만관 이상 텐파이여야 합니다.</p>
      <p>2-1. 이 게임은 쯔모 없이 론으로만 화료하는 게임이므로 천화로는 날 수 없습니다.</p>
      <p>3. 서로의 첫 순에 리치를 선언하며 2에서 선택하지 않은 패를 번갈아가며 버립니다. 서로가 17개의 패를 버렸으면 유국이 됩니다.</p>
      <p>4. 상대방이 오름패(대기패)를 버렸다면 일반 마작과 마찬가지로 론을 선언하면 됩니다.</p>
      <p>5. 역을 계산해 걸은 점수 X 아래의 배율을 곱해 지불합니다.</p>
      <p>
      <table>
        <tr>
          <th>만관</th>
          <th>하네만</th>
          <th>배만</th>
          <th>삼배만</th>
          <th>역만</th>
        </tr>
        <tr>
          <td>1배</td>
          <td>1.5배</td>
          <td>2배</td>
          <td>3배</td>
          <td>4배</td>
        </tr>
      </table>
      </p>
      <p>6. 패를 깠는데 만관 이하라면? 어떻게할까...</p>
      <p>※장풍패는 없으며, 문풍패는 東/西 고정. 울기(후로) 없음(안깡도 불가), 후리텐 룰 적용. 유국만관 없음, 역만 중첩 가능. 더블리치와 단일 역의 더블역만 없음. 인화는 리치 일발로만 취급한다. (자가 리치를 걸기 전에 오야가 쏘였을 때도 리치로 취급)</p>
      <p>보다 자세한 룰은 이 룰의 출처이기도 한 {' '}
        <a href='https://namu.wiki/w/%EC%A7%80%EB%A2%B0%20%EA%B2%8C%EC%9E%84%2017%EB%B3%B4#s-2' rel="noreferrer" target="_blank">
        나무위키</a>
        를 참고하세요</p>
    </div>
  )

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        게임 방법
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      
    </div>
  );
};

export default HowToPlay;