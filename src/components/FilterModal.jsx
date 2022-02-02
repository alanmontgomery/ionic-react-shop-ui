import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from "@ionic/react";

export const FilterModal = ({productsRef, filterCriteria, setFilterCriteria, dismiss, filters}) => {

    const filterProducts = async filter => {

      await productsRef.current.classList.add("animate__fadeOutLeft");

      setTimeout(() => {
        productsRef.current.classList.remove("animate__fadeOutLeft");
        productsRef.current.classList.add("animate__fadeInRight");
        setFilterCriteria(filter);
      }, 500);
      dismiss();
    }

    return (

      <IonContent>
      <IonHeader>
        <IonToolbar color="none" style={{"--border-style": "none"}}>
          <IonTitle className="ion-margin-top">Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonGrid>
          <IonRow>
              {filters.map(f => (
                <IonCol key={f} size="3">
                  <IonButton expand="full" color={filterCriteria === f ? "dark" : "light"} onClick={() => filterProducts(f)}>{f}</IonButton>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  }