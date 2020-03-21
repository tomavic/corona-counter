import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doaa/دعاء</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="content">
          <h2>Prayers Please be Protected<br/> from Dangerous Diseases</h2>

          <div className="card-doa">
            <p dir="rtl" className="doa-arabic">اللَّهُمَّ إِنِّي أَعُوْذُ بِكَ</p>
            <p className="doa-latin">ALLAHUMMA INNII A’UUDZU BIKA</p>

            <p dir="rtl" className="doa-arabic">مِنَ الْبَرَصِ وَالْجُنُوْنِ</p>
            <p className="doa-latin">MINAL BARASHI WAL JUNUUNI</p>

            <p dir="rtl" className="doa-arabic">وَالْجُذَامِ وَمِنْ سَيِّئِ الْأَسْقَامِ</p>
            <p className="doa-latin">WAL JUDZAAMI  WA MIN SAYYI-IL ASQOOMI</p>
          </div>

          <p className="doa-history">HR. Abu Dawud/حديث أبو داوود</p>
          
        </div>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
