import React, { Component } from 'react'
import FeatureList from './FeatureList'

class Features extends Component {
    
    render() { 
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <FeatureList
                  features={this.props.features}
                  selected={this.props.selected}
                  handleUpdateFeature={this.props.handleUpdateFeature}
                />
          </section>
        )
    }
}

export default Features;
