import React from 'react';

interface Props {
  message: String;
}

export const ConversationLoadingScreen: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="content">
        <img src='images/icon_128.png'/>
        <div className='container'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </div>
        <div className='message'>{ props.message }</div>
    </div>
  );
 }
