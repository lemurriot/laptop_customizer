import React from 'react'

export default function FeatureOptions(props) {
    const { handleUpdateFeature, featureTitle, item, selected } = props;
    const selectedClass = item.name === selected[featureTitle].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return (
        <li className="feature__item">
            <div className={featureClass} onClick={e => handleUpdateFeature(featureTitle, item)}>
                {item.name}
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(item.cost) })
            </div>
        </li>
    )
}
