import { IonCol, IonIcon, IonNote } from "@ionic/react";
import { star } from "ionicons/icons";
import { randomCount } from "../utils";

export const ProductReviews = () => {

	//	This count could come from the product (if real data was fed)
	const reviewCount = randomCount();

	return (
		<IonCol className="ion-text-right">
			<IonIcon color="warning" icon={star} />
			&nbsp;&nbsp;
			<IonNote>{reviewCount} review{reviewCount > 1 && "s"}</IonNote>
		</IonCol>
	);
}