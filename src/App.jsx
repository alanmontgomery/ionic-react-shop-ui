import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonModal, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
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
import { cartOutline } from 'ionicons/icons';
import { useRef } from 'react';
import { useStoreState } from 'pullstate';
import { CartStore } from './store';
import { getCartCount } from './store/Selectors';
import { CartModal } from './components/CartModal';

setupIonicReact();

const App = () => {

  const cartCount = useStoreState(CartStore, getCartCount);
  const [ selected, setSelected ] = useState("tab0");
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleClick = tab => {

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
              <div className="cart-count">{cartCount}</div>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
      
      <IonModal presentingElement={ref.current} isOpen={open} onDidDismiss={() => setOpen(false)}>
        <CartModal close={() => setOpen(false)} />
      </IonModal>
    </IonApp>
  );
}

export default App;
