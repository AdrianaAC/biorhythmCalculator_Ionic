import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";
import "../App.css";
import dayjs from "dayjs"; 
import  {calculateBiorhythms} from "../calculations";
import BiorhythmChart from "./BiorhythmChart";

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM YYYY")
}

function BiorhythmCard({birthDate, targetDate}) {
  const {physical, emotional, intellectual} =  calculateBiorhythms(birthDate, targetDate);
    return (
        <div>
        <IonCard className="ion-text-center">
         <ion-icon name="close"></ion-icon>
         <IonCardHeader>
           <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
         </IonCardHeader>
         <IonCardContent>
           <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
          <p>Physical: {physical.toFixed(3)}%</p>
          <p>Emotional: {emotional.toFixed(3)}%</p>
          <p>Intellectual: {intellectual.toFixed(3)}%</p>
         </IonCardContent>
       </IonCard>
        </div>
    );
}

export default BiorhythmCard;