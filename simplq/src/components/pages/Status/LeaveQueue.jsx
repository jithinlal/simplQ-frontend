import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import SidePanelButton from '../../common/SidePanelButton';

export default (props) => {
  const history = useHistory();
  function handleClick() {
    props.leaveQueueHandler().then(() => history.push(`/`));
  }

  return (
    <SidePanelButton
      onClick={handleClick}
      Icon={CloseIcon}
      title="Leave Queue"
      description="Exit from the queue"
    />
  );
};
