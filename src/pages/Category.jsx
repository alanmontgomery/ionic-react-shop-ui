import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { useParams } from 'react-router';
import { capitalize, productInfo } from '../utils';

import styles from "./Categories.module.scss";

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
          {productTypes.map(product => (

            <IonRouterLink key={`${category}_${product}`} routerLink={`/categories/${category}/${product.toLowerCase().replaceAll(" ", "_")}`}>
              <div className={styles.categoryContainer}>
                <img src={productInfo[category].productTypes[product].coverImage} alt="cover" />
                <p>{capitalize(product)}</p>
              </div>
            </IonRouterLink>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Category;
