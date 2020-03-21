import React, { Fragment } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

const SelectBox = (props) => {

  const customActionSheetOptions = {
    header: 'Countries',
    subHeader: ''
  };

  return (
    <Fragment>
      <IonItem>
        <IonLabel>Select Country</IonLabel>
        <IonSelect 
          name="countryCode" 
          okText="Okay" 
          cancelText="Dismiss" 
          interfaceOptions={customActionSheetOptions}
          interface="action-sheet"
          onIonChange={e => props.handleOnChange(e.target.value)} value={props.countryCode}>
          {
            props.countryList.map((country, index) => 
              <IonSelectOption value={country.alpha2Code} key={country.alpha2Code}>{country.name}</IonSelectOption>
            )
          }
        </IonSelect>
      </IonItem>

      {/* <small className="help-text">Tap to change country</small> */}
    </Fragment>
  )
}

export default SelectBox;
