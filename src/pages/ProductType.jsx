import { IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonNote, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonModal, useIonRouter } from '@ionic/react';
import { chevronBack, filter } from 'ionicons/icons';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FilterModal } from '../components/FilterModal';
import { ProductModal } from '../components/ProductModal';
import { capitalize, productInfo } from '../utils';

const ProductType = () => {

  const router = useIonRouter();
  const { category, type } = useParams();
  const productsRef = useRef();

  const [products, setProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("None");

  const filters = productInfo[category].productTypes[type].filters;
  const searchPlaceholder = productInfo[category].productTypes[type].searchPlaceholder;

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [presentProductModal, dismissProductModal] = useIonModal(ProductModal, {

    dismiss: () => dismissProductModal(),
    category,
    type,
    product: selectedProduct    
  });

  const handleProductModal = product => {

    setSelectedProduct(product);
    presentProductModal();
  }
  
  const [present, dismiss] = useIonModal(FilterModal, {

	dismiss: () => dismiss(),
    
    filterCriteria,
    setFilterCriteria,
    productsRef,
    filters
  });

  useEffect(() => {

    const getProducts = async () => {

      const response = await fetch(`/data/${category}/${type}.json`);
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, [category,type]);

  const openModal = () => {

    present({
      breakpoints: [0, 0.25],
      initialBreakpoint: 0.25,
      backdropBreakpoint: 0
    });
  }

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
          <IonTitle>{capitalize(type)}</IonTitle>
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

        <IonRow className="ion-align-items-center ion-text-center ion-justify-content-between">

          <IonCol size="10">
            <IonBreadcrumbs>
              <IonBreadcrumb active={false} color="medium">
                {capitalize(category)}
              </IonBreadcrumb>
              <IonBreadcrumb separator={false} color={filterCriteria !== "None" && "medium"} active={filterCriteria === "None" ? true : false}>
                {capitalize(type)}
              </IonBreadcrumb>
              {filterCriteria !== "None" &&
                <IonBreadcrumb color="dark" active={true}>
                  <IonIcon slot="start" icon={filter} />
                  {filterCriteria}
                </IonBreadcrumb>
              }
            </IonBreadcrumbs>
          </IonCol>

          <IonCol size="2" className="ion-text-right">
            <div onClick={openModal} style={{ display: 'flex', color: "#828282", float:"right", padding: "0.5rem", backgroundColor: "#F4F5F8", marginRight: "0.5rem", width: "fit-content"}}>
              <IonIcon icon={filter} />
              <IonLabel>&nbsp;Filter</IonLabel>
            </div>
          </IonCol>
        </IonRow>

        <IonSearchbar color="light" animated={true} style={{"--border-radius": "none"}} placeholder={`Try '${searchPlaceholder}'`} />

        <IonGrid ref={productsRef} className="animate__animated">
          <IonRow>
            {products.map((product, index) => {

              if (product.image !== null && product.image !== "" && !product.image.includes("Placeholder")) {
                return (
                  <IonCol onClick={() => handleProductModal(product)} key={index} size="6" sizeXs="6" sizeSm="3" sizeMd="3" sizeXl="2" style={{display: ((filterCriteria !== "None" && product.title.toLowerCase().includes(filterCriteria.toLowerCase())) || filterCriteria === "None") ? "block" : "none"}}>
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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ProductType;