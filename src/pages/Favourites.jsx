import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { useState } from 'react';
import { ProductModal } from '../components/ProductModal';
import { FavouritesStore } from '../store';
import { getFavourites } from '../store/Selectors';

const Favourites = () => {

  const favourites = useStoreState(FavouritesStore, getFavourites);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [presentProductModal, dismissProductModal] = useIonModal(ProductModal, {

    dismiss: () => dismissProductModal(),
    product: selectedProduct    
  });

  const handleProductModal = product => {

    setSelectedProduct(product);
    presentProductModal();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourites</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="animate__animated">
          <IonRow>
            {favourites.map((product, index) => {

              if (product.image !== null && product.image !== "" && !product.image.includes("Placeholder")) {
                return (
                  <IonCol onClick={() => handleProductModal(product)} key={index} size="6" sizeXs="6" sizeSm="3" sizeMd="3" sizeXl="2">
                    <IonImg src={product.image} style={{marginBottom: "0.25rem"}} />
                    <IonLabel>
                      <h3>{product.title}</h3>
                      <p>{product.price}</p>
                    </IonLabel>
                  </IonCol>
                );
              } else return null;
            })}
          </IonRow>

          {favourites.length === 0 &&
            <IonRow className="ion-text-center ion-justify-content-center">
              <IonCol size="10">
                <IonText color="dark">
                  <h1>No favourites yet</h1>
                </IonText>

                <IonText color="medium">
                  <h3>Add some by clicking the <IonIcon icon={heartOutline} color="danger" /> icon on a product</h3>
                </IonText>
              </IonCol>
            </IonRow>
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Favourites;
