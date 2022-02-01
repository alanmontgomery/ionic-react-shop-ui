import { IonBackButton, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { arrowForward, chevronBack, chevronForward, filter, filterOutline } from 'ionicons/icons';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

const Home = () => {

  const productsRef = useRef();
  const [products, setProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("None");

  useEffect(() => {

    if (filterCriteria !== "") {
      
      
    }
  }, [filterCriteria]);

  const FilterModal = () => {

    const filters = ["None", "Skinny", "Boot Cut", "Slim", "Flare"];

    const filterProducts = async filter => {

      await productsRef.current.classList.add("animate__fadeOutLeft");
      await setTimeout(() => {
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
                <IonCol size="3">
                  <IonButton expand="full" color={filterCriteria === f ? "dark" : "light"} onClick={() => filterProducts(f)}>{f}</IonButton>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  }
  
  const [present, dismiss] = useIonModal(FilterModal);

  useEffect(() => {

    const getProducts = async () => {

      const response = await fetch("/data/womenjeans.json");
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  const openModal = () => {

    present({
      breakpoints: [0, 0.25],
      initialBreakpoint: 0.25,
      backdropBreakpoint: 0
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

        {/* <IonButtons slot="start">
          <IonButton className="custom-back">
            <IonIcon icon={chevronBack} />
            <IonLabel>Women</IonLabel>
          </IonButton>
        </IonButtons> */}
          <IonTitle>
            <IonBreadcrumbs>
              <IonBreadcrumb active={false} color="dark">
                Women
              </IonBreadcrumb>
              <IonBreadcrumb active={true}>
                Jeans
              </IonBreadcrumb>
            </IonBreadcrumbs>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Shop now</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow className="ion-align-items-center ion-text-center ion-justify-content-between">

          <IonCol size="10">
            <IonBreadcrumbs>
              <IonBreadcrumb active={false} color="medium">
                Women
              </IonBreadcrumb>
              <IonBreadcrumb separator={false} color={filterCriteria !== "None" && "medium"} active={filterCriteria === "None" ? true : false}>
                Jeans
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

        <IonSearchbar color="light" animated={true} style={{"--border-radius": "none"}} placeholder="Try 'Skinny Jeans'" />

        <IonGrid ref={productsRef} className="animate__animated">
          <IonRow>
            {products.map((product, index) => {

              if (product.image !== null) {
                return (
                  <IonCol key={index} size="6" style={{display: ((filterCriteria !== "None" && product.title.toLowerCase().includes(filterCriteria.toLowerCase())) || filterCriteria === "None") ? "block" : "none"}}>
                    <IonImg src={product.image} style={{marginBottom: "0.25rem"}} />
                    <IonLabel>
                      <h3>{product.title}</h3>
                      <p>{product.price}</p>
                    </IonLabel>
                  </IonCol>
                );
              }
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
