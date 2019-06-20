import React from 'react'
import FeatureOption from './FeatureOption'

export default function Feature(props) {
    const { features, featureTitle, selected, handleUpdateFeature } = props;
    const featureOptions = features[featureTitle].map((item, index) => {
        return <FeatureOption 
            item={item}
            index={index}
            key={index}
            featureTitle={featureTitle}
            handleUpdateFeature={handleUpdateFeature}
            selected={selected}
        />
    })

    return (
        <div className="feature" key={featureTitle}>
            <div className="feature__name">{featureTitle}</div>
            <ul className="feature__list">
                {featureOptions}
            </ul>
        </div>
    )
}
