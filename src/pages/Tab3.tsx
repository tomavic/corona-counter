import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doaa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Doaa</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="content">
          <h2>Doa Mohon Dilindungi<br/> dari Penyakit Berbahaya</h2>

          <div className="card-doa">
            <p dir="rtl" className="doa-arabic">اللَّهُمَّ إِنِّي أَعُوْذُ بِكَ</p>
            <p className="doa-latin">ALLAHUMMA INNII A’UUDZU BIKA</p>
            <p className="doa-translation">Ya Allah, aku berlindung kepada-Mu</p>

            <p dir="rtl" className="doa-arabic">مِنَ الْبَرَصِ وَالْجُنُوْنِ</p>
            <p className="doa-latin">MINAL BARASHI WAL JUNUUNI</p>
            <p className="doa-translation">dari penyakit belang dan gila</p>

            <p dir="rtl" className="doa-arabic">وَالْجُذَامِ وَمِنْ سَيِّئِ الْأَسْقَامِ</p>
            <p className="doa-latin">WAL JUDZAAMI  WA MIN SAYYI-IL ASQOOMI</p>
            <p className="doa-translation">dan kusta, dan dari segala penyakit yang buruk/mengerikan lainnya.</p>
          </div>

          <p className="doa-history">HR. Abu Dawud</p>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
