import React from 'react'
import Feature from './Feature'

export default function FeatureList(props) {
    const { features, selected, handleUpdateFeature } = props;

    const listOfFeatures = Object.keys(features)
        .map((key, index) => {
            return <Feature 
                key={index}
                featureTitle={key}
                features={features}
                selected={selected}
                handleUpdateFeature={handleUpdateFeature}
            />
    });  

    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {listOfFeatures}
        </section>
    );
    
}
