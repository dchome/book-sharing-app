import React, { Component, PropTypes } from 'react'
import Books from '../../mocks/books'

class BookListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, year, isbn, author } = this.props;

    return (
      <li className="book-list-item-root">
        {title}
        {year.toString()}
      </li>
    )
  }
}

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isbn: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default class BookListPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          books: Books
        })
      }, 1000)
  }

  render() {
    const { books } = this.state;

    return (
      <div className="book-list-root">
        <ul className="book-list-items">
          {(() => {
            let keyCounter = 0;
            return (
              books.map((book) => {
                const { title, year, isbn, author } = book;
                return (
                  <BookListItem
                    title={title}
                    year={year}
                    isbn={isbn}
                    author={author}
                    key={keyCounter++}/>
                )
              })
            )
          })()}
        </ul>
      </div>
    )
  }
}
