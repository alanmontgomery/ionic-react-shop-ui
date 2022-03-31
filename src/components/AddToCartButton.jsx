import { CreateAnimation, IonButton, IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import { addToCart } from "../store/CartStore";

export const AddToCartButton = ({product}) => {

	const animationRef = useRef();
	const [hidden, setHidden] = useState(true);

	const floatStyle = {

		display: hidden ? "none" : "",
		position: "absolute"
	};

	const floatGrowAnimation = {

		property: "transform",
		fromValue: "translateY(0) scale(1)",
		toValue: "translateY(-55px) scale(1.5)"
	};

	const colorAnimation = {

		property: "color",
		fromValue: "green",
		toValue: "green"
	};

	const mainAnimation = {

		duration: 1500,
		iterations: "1",
		fromTo: [ floatGrowAnimation, colorAnimation ],
		easing: "cubic-bezier(0.25, 0.7, 0.25, 0.7)"
	};

	const handleAddToCart = async product => {

		setHidden(false);
		await animationRef.current.animation.play();
		setHidden(true);
		addToCart(product);
	}

	return (

		<IonButton color="dark" expand="full" onClick={() => handleAddToCart(product)}>
			<IonIcon icon={cartOutline} />&nbsp;
			Add to Cart

			<CreateAnimation ref={animationRef} {...mainAnimation}>
				<IonIcon icon={cartOutline} size="large" style={floatStyle} />
			</CreateAnimation>
		</IonButton>
	);
}