import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentDirectory } from '../../redux/directory/directory.selectors';

import { connect } from 'react-redux';

import './directory.styles.scss';

const Directory = ({ sections }) => {
    return (
                <div className="directory-menu">
                { sections.map( ({id, ...otherSectionProps}) => (
                    <MenuItem key={ id } {...otherSectionProps}/>
                ) )}
            </div>
  )
}


const mapStateToProps = createStructuredSelector({
  sections: selectCurrentDirectory
})

export default connect(mapStateToProps)(Directory);