import React, { useState, useEffect, Fragment } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';

import ListBox from '../components/ListBox/ListBox';
import Loading from '../components/Loading/Loading';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [countryRank, setCountryRank] = useState([]);
  const [indonesiaNumber, setIndonesiaNumber] = useState(0);
  const [showRow] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api/confirmed')
      .then(res => {
        setCountryRank(res.data)
      })
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleProvinceState = (provinceState: any, countryRegion: any) => (
    provinceState && (provinceState !== countryRegion) ? `(${provinceState})` : ''
  )

  const showOrder = (countryRegion: any, index: any) => (
    <Fragment>{(countryRegion === 'Indonesia') ? indonesiaNumber : index + 1}</Fragment>
  )

  useEffect(() => {
    countryRank.filter((data: any, index: any) => 
      data.countryRegion === 'Indonesia' ? setIndonesiaNumber(index + 1) : ''
    )
  }, [countryRank]);




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rank/بيانات</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          {
            loading ? <Loading /> : 
            <ol className="rank-list">
              {
                countryRank
                .filter((data: any, index: any) => (index < showRow || data.countryRegion === 'Egypt' ))
                .map((data, index) => (
                  <ListBox
                    key={index} 
                    index={index}
                    data={data} 
                    showOrder={(a: any, b: any) => showOrder(a, b)}
                    toggleProvinceState={(a: any, b: any) => toggleProvinceState(a, b)}/>
                ))
              }
            </ol>
          }
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
