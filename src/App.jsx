import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonPage, IonRouterOutlet, IonRow, IonTabBar, IonTabButton, IonTabs, IonText, IonThumbnail, IonTitle, IonToolbar, setupIonicReact, useIonModal } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import 'animate.css';

import { pages } from './pages';
import { useState } from 'react';
import { cartOutline, close, closeOutline } from 'ionicons/icons';
import { useRef } from 'react';

setupIonicReact();

const App = () => {

  const [ selected, setSelected ] = useState("tab0");

  const ref = useRef();

  const cart = [

    {
      title: "Bronx Oak Effect Coffee Table",
      price: "325.00",
      image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/161294.jpg?X56"
    },
    {
      title: "Black Slim Active Joggers",
      price: "49.00",
      image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/544545.jpg?X56"
    },
    {
      title: "Matson Ottoman Storage Bed",
      price: "610.00",
      image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/237974.jpg?X56"
    }
  ];

  const Modal = props => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
          <IonButtons slot="end" onClick={props.close}>
            <IonIcon icon={close} size="large" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
          <IonRow style={{borderBottom: "1px solid black"}} className="ion-margin-bottom">
            <IonItem lines="none">
              <IonLabel>
                <h1>{cart.length} products in your cart</h1>
                <IonText color="medium">
                  <h2>Review products and checkout</h2>
                </IonText>
              </IonLabel>
            </IonItem>
          </IonRow>
        </IonGrid>

        {cart.map((item, index) => (

          <IonItem key={index} lines="none" className="ion-padding-end" style={{paddingTop: "0.75rem", paddingBottom: "0.75rem"}}>
            <IonThumbnail>
              <img src={item.image} alt="item" />
            </IonThumbnail>
            <IonLabel className="ion-padding-start ion-text-wrap">
              <h2>{item.title}</h2>
              <p>£{item.price}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonContent>

      <IonFooter className="ion-padding-bottom ion-padding-start ion-padding-end" style={{paddingBottom: "3rem"}}>
        <IonRow className="ion-justify-content-between">
          <IonCol size="8">
            <h1>Total</h1>
          </IonCol>

          <IonCol size="4">
            <h1>£984.00</h1>
          </IonCol>
        </IonRow>
        <IonButton expand="block" color="dark">Checkout &rarr;</IonButton>
      </IonFooter>
    </IonPage>
  );

  const [present, dismiss] = useIonModal(Modal, {

    dismiss: () => dismiss()
  });
  const [open, setOpen] = useState(false);

  const handleClick = tab => {
    
    // present({presentingElement: ref.current})
    console.log("in this");
    tab === "tabCart" ? setOpen(true) : setSelected(tab);
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsWillChange={e => handleClick(e.detail.tab)}>
          <IonRouterOutlet ref={ref}>

            {pages.map((page, index) => (
              <Route key={`route_${index}`} exact={true} path={page.href} component={page.component} />
            ))}

            <Route exact path="/">
              <Redirect to={pages.filter(p => p.default)[0].href} />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            {pages.map((page, index) => {

              const isSelected = selected === `tab${index}`;

              if (page.isTab) {
                return (
                  <IonTabButton key={`tab${index}`} tab={`tab${index}`} href={page.href}>
                    <IonIcon icon={page.icon} />
                    { isSelected && <div className="tab-dot" /> }
                  </IonTabButton>
                );
              } else return null;
            })}

            <IonTabButton tab="tabCart">
              <IonIcon icon={cartOutline} />
              <div className="cart-count">3</div>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
      
      <IonModal presentingElement={ref.current} isOpen={open} onDidDismiss={() => setOpen(false)}>
        <Modal close={() => setOpen(false)} />
      </IonModal>
    </IonApp>
  );
}

export default App;
