import React, { useState } from "react";
import {
  IonContent,
  IonMenu,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const [showGrades, setShowGrades] = useState(false); // State to control the dropdown

  const toggleGradesDropdown = () => {
    setShowGrades(!showGrades); // Toggle the dropdown
  };

  return (
    <>
      {/* Sidebar */}
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>EDUMETRICS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {/* Grades Dropdown */}
            <IonItem button onClick={toggleGradesDropdown}>
              <IonLabel>Grades</IonLabel>
              <IonIcon
                slot="end"
                icon={showGrades ? chevronUpOutline : chevronDownOutline}
              />
            </IonItem>

            {/* Grade items shown conditionally based on dropdown state */}
            {showGrades && (
              <>
                <IonItem button>Grade 12</IonItem>
                <IonItem button>Grade 11</IonItem>
                <IonItem button>Grade 10</IonItem>
                <IonItem button>Grade 9</IonItem>
                <IonItem button>Grade 8</IonItem>
                <IonItem button>Grade 7</IonItem>
              </>
            )}
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Main Content */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
