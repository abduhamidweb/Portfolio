import React from 'react'
import { useState } from 'react'
import './portfolio.scss'
import cardURL from '../../assets/images/portfolio.jpg'
import Card from '../../components/Card'
const Portfolio = () => {
  const [isDay, setIsDay] = useState(true)

  const toggleNightToDay = () => {
    setIsDay(!isDay)
  }
  // Pagination
  let cards = [
    { a: 1 },
    { a: 2 },
    { a: 3 },
    { a: 4 },
    { a: 5 },
    { a: 6 },
    { a: 7 },
    { a: 8 },
    { a: 9 },
    { a: 10 },
    { a:11 },
    { a: 12 },
    { a: 13 },
    { a: 14 },
  ]

  const [currentPage, setCurrentPage] = useState(1)

  const [totalPage, setTotalPage] = useState(8)

  const firstPage = currentPage * totalPage

  const lastPage = firstPage - totalPage

  const lastData = cards.slice(lastPage, firstPage)
  console.log('lastData :', lastData)

  const paginate = (id) => {
    setCurrentPage(id)
  }

  const pageNumber = []
  for (let i = 1; i <= Math.ceil(cards.length / totalPage); i++) {
    pageNumber.push(i)
  }
  return (
    // <div style={{ backgroundColor: isDay ? '#fff' : '#000', height: '100vh' }}>
    //   <p onClick={toggleNightToDay}> dark mode</p>
    // </div>
    <>
      <section className='portfolio'>
        <div class='section-title'>
          <h2>portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className='container'>
          <div className='row row__twoo'>
            {lastData.length
              ? lastData.map((item, index) => {
                  return <Card imgURL={cardURL} a={item.a} />
                })
              : 'Loading...'}
            <nav aria-label='Page navigation example'>
              <ul className='pagination'>
                {pageNumber.map((pageEl) => {
                  return (
                    <li
                      className='page-item   rounded-5 mx-auto my-2'
                      onClick={() => {
                        paginate(pageEl)
                        console.log(pageEl)
                      }}
                    >
                      <a className='page-link'>{pageEl}</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
