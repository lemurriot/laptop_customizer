import React from 'react'

export default function FeatureOptions(props) {
    const { handleUpdateFeature, key, item } = props;
    return (
        <li className="feature__item">
            <div className="featClass" onClick={e => handleUpdateFeature(key, item)}>
                {item.name}
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(item.cost) })
            </div>
        </li>
    )
}

// return <li key={index} className="feature__item">
// <div className={featureClass}
  
//   onClick={e => this.updateFeature(key, item)}>
//     { item.name }
//     ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
//       .format(item.cost) })
// </div>
// </li>

// const options = this.props.features[key].map((item, index) => {
//     const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
//     const featureClass = 'feature__option ' + selectedClass;
//     return <li key={index} className="feature__item">
//       <div className={featureClass}
        
//         onClick={e => this.updateFeature(key, item)}>
//           { item.name }
//           ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
//             .format(item.cost) })
//       </div>
//     </li>
//   });