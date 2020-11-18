import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
const books = [{
  id: 1,
  img: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg',
  title: 'i love you to the moon and back',
  author: 'Amelia Hepworth',
}, {
  id: 2,
  img: 'https://m.media-amazon.com/images/I/711hfHGE+cL._AC_UL320_.jpg',
  title: 'Great storiess fro children',
  author: 'Anisoscm dnidc',
}, {
  id: 3,
  img: 'https://m.media-amazon.com/images/I/51G-+iRKaIL._AC_UY218_.jpg',
  title: 'Great storiess fro children',
  author: 'Anisoscm dnidc',
}];


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return (<Book key={book.id} {...book}></Book>)
      })}
    </section>
  )
}
const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h5>{author} </h5>
      <button type='button' onClick={clickHandler}>referrence example</button>
      <button type='button' onClick={() => complexExample(author)}>newbutton for authors</button>
    </article>
  )
}



ReactDom.render(<BookList />, document.getElementById('root'))