import React, { useState } from 'react'

import {   } from '../redux/actions'

const FilterTask = ({filterDone,handlefilterchange}) => {


  return (
    <div>

        <input   value={filterDone} onChange={(e)=>handlefilterchange(e.target.value)} type="text" name="
        " id="" />
    </div>
  )
}

export default FilterTask