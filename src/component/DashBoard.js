import React, { useEffect } from 'react'
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { delFilter, setCheck, setTag } from './Action';
import { SET_DELETE } from './Type';


function DashBoard() {

  const state = useSelector(state => state)

  const dispatch = useDispatch()
  console.log(state.tag)

  const [user, setUser] = useState({ languages: [] })


  const subFun = (e) => {

    const { languages } = user;
    const { value, checked } = e.target
    if (checked) {
      setUser({
        languages: [...languages, value]
      })

    }
    else {
      setUser({
        languages: languages.filter(e => e !== value)
      })
    }

  }


  const deleteHandle = (event) => {
    console.log(state.tag);
    console.log(state.checked);

    let delVal1 = state.checked.filter(eve => eve !== event.target.name)
    // dispatch(setCheck(delVal1))
    // console.log(delVal1);
    let delItem = state.tag.filter(eve => eve !== event.target.name)
    // console.log(state.tag);
    dispatch(delFilter({ delVal1, delItem }))
  }

  useEffect(() => {
    dispatch(setCheck(user.languages))
  }, [user])

  console.log(user)
  return (
    <div style={{ height: "80vh" }}>
      {console.log(user.languages.length
      )}
      {console.log(user)}

      {
        state?.tag?.map((item, i) => {
          return (<div key={i} className="form-check">
            <input className="form-check-input" type="checkbox" value={item} onChange={subFun} id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">

              {item}
            </label>
            <button type="button" name={item} className='btn btn-primary' onClick={deleteHandle}>Delete</button>

          </div>)


        })
      }

    </div>
  )
}

export default DashBoard