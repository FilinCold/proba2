import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {

  return (
    <div>
      <div className='buttton__main'>
        <NavLink to='/'>Main</NavLink>
      </div>
      {
        props.arr.map(({
                         id, header, links, texts1, header2,
                         texts2, images, title, header3, texts3, title2, author, header4, texts4, titles3,
                         authors, header5, texts5, titles4
                       }) => {
          if (id !== undefined) {
            return (
              <div key={id} className='container__post'>
                <div className='post'>
                  <h1>{header}</h1>
                  <ul className='list'>
                    {links.map(item => {
                      return (
                        <li key={item.id}><a href="">{item.hrefText}</a></li>
                      )
                    })}
                  </ul>
                  {texts1.map(item => {
                    return (
                      <p className='text__class' key={item.id}>{item.text}</p>
                    )
                  })}
                  <h2 className='style__header2'>{header2}</h2>
                  {
                    texts2.map(item => {
                      return <p className='text__class' key={item.id}>{item.text}</p>
                    })
                  }
                  <div className='img__style'>
                    {
                      images.map(item => {
                        if (images[0]) {
                          return (
                            <img key={item.id} src={item.href} alt=""/>
                          )
                        }
                      })
                    }
                  </div>
                  <p className='title__style'><i>{title}</i></p>
                  {
                    texts2.map(item => {
                      if (item.id === 3) {
                        return (
                          <p className='text__class'>{item.text}</p>
                        )
                      }
                    })
                  }
                  <h2 className='style__header2'>{header3}</h2>

                  {
                    texts3.map(item => {
                      if (item.id === 1) {
                        return (
                          <p className='text__class'>
                            {item.text}
                          </p>
                        )
                      }
                    })
                  }
                  <p style={{textAlign: "center",}} className='title__style'><i>{title2}</i></p>
                  <p className='author__style'><i>{author}</i></p>
                  {
                    texts3.map(item => {
                      if (item.id === 2) {
                        return (
                          <p className='text__class'>
                            {item.text}
                          </p>
                        )
                      }
                    })
                  }
                  <h2 className='style__header2'>{header4}</h2>
                  {
                    texts4.map(item => {
                      if (item.id === 1) {
                        return (
                          <p className='text__class'>{item.text}</p>
                        )
                      }
                    })
                  }
                  {
                    titles3.map(item => {
                      if (item.id === 1) {
                        return (
                          <p style={{textAlign: "center", fontSize: "22px"}} className='title__style'>
                            <i>{item.title}</i></p>
                        )
                      }
                    })
                  }
                  {
                    authors.map(item => {
                      if (item.id === 1) {
                        return <p className='author__style'><i>{item.author}</i></p>
                      }
                    })
                  }
                  {
                    texts4.map(item => {
                      if (item.id === 2) {
                        return <p className='text__class'>{item.text}</p>
                      }
                    })
                  }
                  {
                    titles3.map(item => {
                      if (item.id === 2) {
                        return <p style={{textAlign: "center"}} className='text__class'><i>{item.title}</i></p>
                      }
                    })
                  }
                  {
                    authors.map(item => {
                      if (item.id === 2) {
                        return <p className='author__style'><i>{item.author}</i></p>
                      }
                    })
                  }
                  {
                    texts4.map(item => {
                      if (item.id === 3) {
                        return <p className='text__class'>{item.text}</p>
                      }
                    })
                  }
                  <div className='images__wrapper'>
                    {
                      images.map(item => {
                        if (item.id === 2) {

                          return item.packImg.map(link => {
                            return (
                              <div key={link.id}>
                                <img src={link.href} alt=""/>
                              </div>
                            )
                          })
                        }
                      })
                    }
                  </div>
                  {
                    titles3.map(item => {
                      if (item.id === 3) {
                        return <p className='title__style'>
                          <i>{item.title}</i></p>
                      }
                    })
                  }
                  {
                    texts4.map(item => {
                      if (item.id === 4) {
                        return (
                          <p className='text__class'>{item.text}</p>
                        )
                      }
                    })
                  }
                  <h2 className='style__header2'>{header5}</h2>
                  {
                    texts5.map(item => {
                      if (item.id === 1) {
                        return <p className='text__class'>{item.text}</p>
                      }
                    })
                  }

                  <div className='wrapper__name-app'>
                    {
                      titles4.map(item => {
                        if (item.id === 1) {
                          return item.titleWords.map(t => {
                            if (t.id === 1) {
                              return <span><i>{`${t.t} `}</i></span>
                            }
                          })
                        }
                      })
                    }
                    {
                      titles4.map(item => {
                        if (item.id === 3) {
                          return <span className='titles__name-app'><i><a href="">{item.name}</a></i></span>
                        }
                      })
                    }
                    {
                      titles4.map(item => {
                        if (item.id === 1) {
                          return item.titleWords.map(t => {
                            if (t.id === 2) {
                              return <span><i>{` ${t.t} `}</i></span>
                            }
                          })
                        }
                      })
                    }
                    {
                      titles4.map(item => {
                        if (item.id === 3) {
                          return <span className='titles__name-app'><i><a href="">{item.app}.</a></i></span>
                        }
                      })
                    }
                  </div>
                  {
                    titles4.map(item => {
                      if (item.id === 2) {
                        return <p className='title__style'><i>{item.title}</i></p>
                      }
                    })
                  }
                </div>
              </div>
            )
          }


        })
      }

    </div>

  )
}


export default Post;