import { useStoreState } from "pullstate";
import { useEffect, useState } from "react";
import { CartStore } from "../store";
import { addToCart } from "../store/CartStore";
import { getCart } from "../store/Selectors";

const { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon, IonContent, IonGrid, IonRow, IonItem, IonLabel, IonText, IonThumbnail, IonFooter, IonCol, IonButton, IonItemSliding, IonItemOptions, IonItemOption } = require("@ionic/react");
const { close } = require("ionicons/icons");

export const CartModal = props => {

	const cart = useStoreState(CartStore, getCart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

    let total = 0;
    cart.forEach(item => total += parseInt(item.price.replace("£", "")));
    setTotalPrice(total);
  }, [cart]);

	return (
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
					<IonItemSliding>
						<IonItem key={index} lines="none" className="ion-padding-end" style={{paddingTop: "0.75rem", paddingBottom: "0.75rem"}}>
							<IonThumbnail>
								<img src={item.image} alt="item" />
							</IonThumbnail>
							<IonLabel className="ion-padding-start ion-text-wrap">
								<h2>{item.title}</h2>
								<p>{item.price}</p>
							</IonLabel>
						</IonItem>

						<IonItemOptions side="end">
							<IonItemOption color="danger" onClick={() => addToCart(item)}>
								Remove
							</IonItemOption>
						</IonItemOptions>
					</IonItemSliding>
				))}
			</IonContent>

			<IonFooter className="ion-padding-bottom ion-padding-start ion-padding-end" style={{paddingBottom: "3rem"}}>
				<IonRow className="ion-justify-content-between">
					<IonCol size="8">
						<h1>Total</h1>
					</IonCol>

					<IonCol size="4">
						<h1>£{totalPrice.toFixed(2)}</h1>
					</IonCol>
				</IonRow>
				<IonButton expand="block" color="dark">Checkout &rarr;</IonButton>
			</IonFooter>
		</IonPage>
	);
}