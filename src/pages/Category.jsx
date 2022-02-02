import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { useParams } from 'react-router';
import { capitalize, productInfo } from '../utils';

const Category = () => {

  const router = useIonRouter();
  const { category } = useParams();
  const productTypes = Object.keys(productInfo[category].productTypes);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

        <IonButtons slot="start">
          <IonButton className="custom-back" onClick={() => router.goBack()}>
            <IonIcon icon={chevronBack} />
            <IonLabel>Back</IonLabel>
          </IonButton>
        </IonButtons>
          <IonTitle>{category}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="page-title">
              <IonNote>shop</IonNote>
              <IonLabel>{category}</IonLabel>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow>
          {productTypes.map(c => (

            <IonButton key={c} routerLink={`/categories/${category}/${c.toLowerCase().replaceAll(" ", "_")}`}>{capitalize(c)}</IonButton>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Category;
