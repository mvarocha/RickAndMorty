import FeatherIcon from 'feather-icons-react'
import { useEffect, useState } from 'react';

function Pagination({ onChangePage, pageLimitValue }) {

  const [pageValue, setPageValue] = useState(1);

  console.log(pageValue)

  function previous() {
    if (pageValue > 1) {
      setPageValue(pageValue - 1)
    }
  }

  function next() {
    if (pageValue < pageLimitValue){
      setPageValue(pageValue + 1)
    }
  }

  useEffect(()=>{
    onChangePage(pageValue)
  }, [pageValue, onChangePage])



  return (
    <div className="pagination">
      <button onClick={previous}>
        <FeatherIcon icon="arrow-left" />
      </button>
      <button onClick={next}>
        <FeatherIcon icon="arrow-right" />
      </button>

    </div>
  )
}

export default Pagination;