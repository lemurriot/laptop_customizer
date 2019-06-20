import React from 'react'
import FeatureOption from './FeatureOption'

export default function Feature(props) {
    const { features, featureTitle, selected, handleUpdateFeature } = props;
    const featureOptions = features[featureTitle].map((item, index) => {
        return <FeatureOption 
            item={item}
            index={index}
            key={featureTitle}
            handleUpdateFeature={handleUpdateFeature}
            selected={selected}
        />
    })

    // const selectedClass = features.item.name === selected[featureTitle].name ? 'feature__selected' : '';
    // const featureClass = 'feature__option ' + selectedClass;
    return (
        <div className="feature" key={featureTitle}>
            <div className="feature__name">{featureTitle}</div>
            <ul className="feature__list">
                {featureOptions}
            </ul>
        </div>
        // <li featureTitle={index} className="feature__item">
        //   <div className={featureClass}
            
        //     onClick={e => handleUpdateFeature(featureTitle, item)}>
        //       { item.name }
        //       ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        //         .format(item.cost) })
        //   </div>
        // </li>
    )
}
