import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from "@ionic/react";
import { fastFoodOutline } from "ionicons/icons";
import { useState } from "react";

export const Breadcrumbs = () => {

  const [maxItems, setMaxItems] = useState(2);

  const handleClick = () => {

    setMaxItems(undefined);
  }

	return (

    <IonBreadcrumbs maxItems={maxItems} onIonCollapsedClick={handleClick}>
      <IonBreadcrumb color="medium">Page 1</IonBreadcrumb>
      <IonBreadcrumb color="medium">Page 2</IonBreadcrumb>
      <IonBreadcrumb color="medium">Page 3</IonBreadcrumb>
      <IonBreadcrumb>Page 4</IonBreadcrumb>
    </IonBreadcrumbs>
	);
}