import { IonButton, IonContent, IonHeader, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { capitalize, productInfo } from '../utils';

const Categories = () => {

  const categories = Object.keys(productInfo);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle size="large" className="page-title">
              <IonLabel>ionic</IonLabel>
              <IonNote>shop</IonNote>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow>
          {categories.map(c => (

            <IonButton key={c} routerLink={`/categories/${c.toLowerCase()}`}>{capitalize(c)}</IonButton>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Categories;
