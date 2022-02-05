import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList, IonNote } from "@ionic/react";
import { useRef } from "react";
import { productSpecs } from "../utils";

export const ProductSpecificationsAccordion = ({type, contentRef}) => {

	const accordionGroupRef = useRef(null);

	const log = () => {

		const selectedAccordion = accordionGroupRef.current.value;

		if (selectedAccordion) {

			setTimeout(() => contentRef.current.scrollToBottom(400), 200);
		}
	}

	return (
		<IonAccordionGroup ref={accordionGroupRef} onIonChange={log}>
			{Object.keys(productSpecs).map((spec, index) => {

				const {header, options, wrapText = false, noteColor = false} = productSpecs[spec];

				return (

					<IonAccordion key={`accordion_${header}_${index}`}>
						<IonItem slot="header" className="ion-no-padding">
							<IonLabel>{header}</IonLabel>
						</IonItem>


						<IonList slot="content" className="ion-no-padding">
							{options.map((option, index2) => {

								const {label, value} = option;

								return (

									<IonItem key={`accordion_${header}_${option}_${index2}`} className="ion-no-padding">
										<IonLabel>
											<h3>{label}</h3>
										</IonLabel>
										<IonLabel className={wrapText && "ion-text-wrap"}>
											<IonNote color={noteColor ? (value ? "success" : "danger") : "medium"}>
												{noteColor ? (value ? "In stock" : "Out of stock") : value}
											</IonNote>
										</IonLabel>
									</IonItem>
								);
							})}
						</IonList>
					</IonAccordion>
				);
			})}
		</IonAccordionGroup>
	);
}