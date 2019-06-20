import React from 'react'
import Feature from './Feature'

export default function FeatureList(props) {
    const { features, selected, handleUpdateFeature } = props;

    const featurama = Object.keys(features)
    .map(key => {
        // const options = features[key].map((item, index) => {
            return (
            <Feature 
                featureTitle={key}
                features={features}
                selected={selected}
                handleUpdateFeature={handleUpdateFeature}
            />
        // );
        //     }
            );

      return <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { featurama }
        </ul>
      </div>
    });  

    return (
        <div>
            {featurama}
        </div>
    );
    
}