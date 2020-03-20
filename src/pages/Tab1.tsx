
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import SelectBox from '../components/SelectBox/SelectBox';
import CounterBoxLg from '../components/CounterBoxLg/CounterBoxLg';
import CounterBox from '../components/CounterBox/CounterBox';
import Disclaimer from '../components/Disclaimer/Disclaimer';
import Loading from '../components/Loading/Loading';
import NotFound from '../components/NotFound/NotFound';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [covidCount, setCovidCount] = useState(0);

  const [countryList, setCountryList] = useState({});
  const [countryCode, setCountryCode] = useState('ID');

  const [loadingCovidCount, setloadingCovidCount] = useState(true);
  const [loadingCountryList, setloadingCountryList] = useState(true);

  const [found, setFound] = useState(true);
  
  useEffect(() => {
    // covid data
    axios.get(`https://covid19.mathdro.id/api/countries/${countryCode}`)
      .then((res: any) => {
        setCovidCount(res.data);
        setloadingCovidCount(false);
        setFound(true);
      })
      .catch((err: any) => {
        console.log(err);
        setloadingCovidCount(false);
        setFound(false);
      });
  }, [countryCode]);

  useEffect(() => {
    // country list
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((res: any) => {
        setCountryList(res.data);
        setloadingCountryList(false)
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const handleOnChange = (value: any) => {
    setloadingCovidCount(true);
    setCountryCode(value);
  }

  const { confirmed, recovered, deaths, lastUpdate } = covidCount as any;



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>


        <div className="content">
          {
            loadingCountryList ? '' :
            <Fragment>
              <SelectBox countryList={countryList} countryCode={countryCode} handleOnChange={(e: any) => handleOnChange(e)}/>
              {
                loadingCovidCount ?  <Loading />:
                (!found) ? <NotFound text="Data tidak ditemukan." /> :
                <Fragment>
                  <CounterBoxLg confirmed={confirmed} />
                  <CounterBox confirmed={confirmed} recovered={recovered} deaths={deaths} />
                  <Disclaimer lastUpdate={lastUpdate} />
                </Fragment>
              }
            </Fragment>
          }
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
