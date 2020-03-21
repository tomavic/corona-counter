import React from 'react';
import { IonSpinner } from '@ionic/react';

const Loading = () => {
  return (
    <div className="loading">
      <IonSpinner name="dots" />
      <p>Loading...</p>
    </div>
  )
}

export default Loading;
