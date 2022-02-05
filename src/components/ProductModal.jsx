import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonIcon, IonLabel, IonNote, IonRow, IonText, IonToolbar } from "@ionic/react";
import { cartOutline, closeCircle, heartOutline } from "ionicons/icons";
import { useRef } from "react";

import "./ProductModal.css";
import { ProductReviews } from "./ProductReviews";
import { ProductSpecificationsAccordion } from "./ProductSpecificationsAccordion";

export const ProductModal = props => {

	const { dismiss, category, product } = props;
	const contentRef = useRef(null);

	return (
		<>
			<IonContent ref={contentRef}>
				<IonButtons id="product-view-buttons">
					<IonButton color="light" onClick={dismiss} id="close-button">
						<IonIcon icon={closeCircle} size="large" />
					</IonButton>

					<IonButton color="light" onClick={dismiss} id="fave-button">
						<IonIcon icon={heartOutline} size="large" />
					</IonButton>
				</IonButtons>

				<IonCard style={{backgroundImage: `url('${product.image}')`}}>
					<IonCardHeader>
						<IonCardTitle>{product.title}</IonCardTitle>
						<IonCardSubtitle>{product.price}</IonCardSubtitle>
					</IonCardHeader>
				</IonCard>

				<div className="ion-padding">

					<IonRow className="ion-align-items-center">
						<IonCol>
							<IonText size="large" className="page-title">
								<IonNote>shop</IonNote>
								<IonLabel>{category}</IonLabel>
							</IonText>
						</IonCol>

						<ProductReviews reviews={product.reviews} />
					</IonRow>
					<h2>Product Description</h2>
					<IonText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit felis, molestie id venenatis at, commodo ac tortor. Pellentesque tempus aliquet purus, sed vulputate elit tempus ut.</IonText>

					<h2>Product Specifications</h2>
					<ProductSpecificationsAccordion contentRef={contentRef} type={category} />
				</div>
			</IonContent>

			<IonFooter collapse="fade">
				<IonToolbar>
					<IonRow className="ion-justify-content-between ion-align-items-center">
						<IonCol size="3">
							<IonButton expand="full" color="light">{product.price}</IonButton>
						</IonCol>

						<IonCol size="8" className="ion-text-right">
							<IonButton color="dark" expand="full">
								<IonIcon icon={cartOutline} />&nbsp;
								Add to Cart
							</IonButton>
						</IonCol>
					</IonRow>
				</IonToolbar>
			</IonFooter>
		</>
	);
}