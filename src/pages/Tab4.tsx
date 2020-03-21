import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRow, IonCol } from '@ionic/react';
import './Tab4.css';

import { logoGithub, logoTwitter } from 'ionicons/icons';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <h1>About us</h1>

          <p>Mobile and Web real-time app which displays latest stat. of COVID-19 Corona virus.</p>

          <p>
            However, errors and/or losses caused by errors in the data are not the responsibility of us.
          </p>

          <p>You can find me at</p>

          <IonRow>
            <IonCol>
              <IonButton href="https://github.com/tomavic" target="_blank" rel="noopener noreferrer" color="dark">
                <IonIcon slot="icon-only" icon={logoGithub} />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="https://twitter.com/toomavic" target="_blank" color="dark">
                <IonIcon slot="icon-only" icon={logoTwitter} />
              </IonButton>
            </IonCol>
          </IonRow>

          <h3> Data Sources:</h3>

          <a href="https://www.who.int/" rel="noopener noreferrer" target="_blank">
            <p>World Health Organization (WHO)</p>
          </a>

          <a href="https://www.facebook.com/egypt.mohp/" rel="noopener noreferrer" target="_blank">
            <p>The Egyptian Ministry of Health and Population</p>
          </a>

          <a href="http://3g.dxy.cn/newh5/view/pneumonia" rel="noopener noreferrer" target="_blank">
            <p>DXY.cn. Pneumonia. 2020</p>
          </a>

          <a href="https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases/l" rel="noopener noreferrer" target="_blank">
            <p>BNO News</p>
          </a>

          <a href="http://www.nhc.gov.cn/xcs/yqtb/list_gzbd.shtml" rel="noopener noreferrer" target="_blank">
            <p>National Health Commission of the People’s Republic of China (NHC)</p>
          </a>
          <a href="http://weekly.chinacdc.cn/news/TrackingtheEpidemic.htm" rel="noopener noreferrer" target="_blank">
            <p>China CDC (CCDC)</p>
          </a>
          <a href="https://www.chp.gov.hk/en/features/102465.html" rel="noopener noreferrer" target="_blank">
            <p>Hong Kong Department of Health</p>
          </a>
          <a href="https://www.ssm.gov.mo/portal/" rel="noopener noreferrer" target="_blank">
            <p>Macau Government</p>
          </a>

          <a href="https://sites.google.com/cdc.gov.tw/2019ncov/taiwan?authuser=0" rel="noopener noreferrer" target="_blank">
            <p>Taiwan CDC</p>
          </a>

          <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" rel="noopener noreferrer" target="_blank">
            <p>US CDC</p>
          </a>

          <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus.html" rel="noopener noreferrer" target="_blank">
            <p>Government of Canada</p>
          </a>

          <a href="https://www.health.gov.au/news/coronavirus-update-at-a-glance" rel="noopener noreferrer" target="_blank">
            <p>Australia Government Department of Health</p>
          </a>

          <a href="https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases" rel="noopener noreferrer" target="_blank">
            <p>European Centre for Disease Prevention and Control ECDC</p>
          </a>

          <a href="https://www.moh.gov.sg/covid-19" rel="noopener noreferrer" target="_blank">
            <p>Ministry of Health Singapore (MOH)</p>
          </a>

          <a href="http://www.salute.gov.it/nuovocoronavirus" rel="noopener noreferrer" target="_blank">
            <p>Italy Ministry of Health</p>
          </a>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
