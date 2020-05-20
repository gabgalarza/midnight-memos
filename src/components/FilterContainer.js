import React, { Component } from 'react'
import Collapsible from 'react-collapsible'
import config from '../../src/constants.json'

class FilterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasReachedBottom: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll.bind(this), false)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll.bind(this), false)
  }

  handleScroll = (event) => {
    const node = event.target;
    const hasReachedBottom = node.scrollingElement.scrollTop > 1246

    this.setState({ hasReachedBottom });
  }

  render() {
    const { parentFilters, header } = config.filters
    const { hasReachedBottom } = this.state

    return (
      <div id="FilterContainerDiv">
        <div className="section filter-container">
          <div className={`${hasReachedBottom ? `is-hidden` : `is-fixed`}`}>
            <h4 className="header has-text-weight-semibold is-size-4">{header}</h4>
            {parentFilters.map((filter, i) => {
              const name = Object.keys(parentFilters[i])
              return (
                <Collapsible
                  key={name[0]}
                  transitionTime={100}
                  trigger={
                    <div className="collapsible-link">
                      {name[0]}<div>+</div>
                    </div>
                  }
                  className="collapsible-div"
                  contentOuterClassName="content-outer"
                  contentInnerClassName="content-inner"
                >
                  {filter[name].map(subFilter => <div key={subFilter}>{subFilter}</div>)}
                </Collapsible>
              );
            })}
            </div>
        </div>
      </div>
    )
  }
}

export default FilterContainer