import React from 'react'
import logo from "../../assets/logo.JPG"

const Restuarants = () => {
  



  return (
    <main>
    <section className="menu section">
      <div className="title">
        <img src={logo} alt="logo" className="logo" />
        <h2>Add Restuarants here</h2>

        <div className="underline"></div>
      </div>
      {/* <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <Menu items={menuItems} /> */}
    </section>
  </main>
  )
}

export default Restuarants