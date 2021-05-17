import React, { useState } from 'react';
import './Panel.css';

interface PanelProps {
  hasHeading: Boolean;
  headingText?: String;
  children: JSX.Element[];
}

const Panel = (props: PanelProps) => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  return (
    <div className='panel'>
      {props.hasHeading && (
        <PanelHeading isPanelContentVisible={isContentVisible} setIsPanelContentVisible={setIsContentVisible} />
      )}
      <div className='panel-content' data-is-visible={isContentVisible ? true : false}>
        {props.children}
      </div>
    </div>
  );
};

interface PanelHeadingProps {
  headingText?: String;
  isPanelContentVisible: Boolean;
  setIsPanelContentVisible: Function;
}

const PanelHeading = (props: PanelHeadingProps) => {
  const handleContentVisibilityButton = () => {
    props.setIsPanelContentVisible(!props.isPanelContentVisible);
  };

  return (
    <div className='panel-heading'>
      <h2 className='panel-heading-text'>{props.headingText}</h2>
      <button className='panel-content-visibility-button' onClick={handleContentVisibilityButton}>
        {props.isPanelContentVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Panel;
