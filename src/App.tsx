import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post, IPost } from "./components/Post/Post";



import styles from './App.module.css'

import './global.css';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sirwhod.png",
      name: "Rodrigo Brandão",
      role: "Web Developer @ Lola Cosmetics"
    },
    publishedAt: new Date('2023-05-28 13:00:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: '👉'},
      {type: 'link', content: 'jane.design/doctorcare' },
      {type: 'link', content: '#novoprojeto' },
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'}
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://scontent.fsdu25-1.fna.fbcdn.net/v/t1.6435-9/83855938_1541298026038871_7654134705092034560_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=p8P6Nf5xEkEAX8iWGoB&_nc_ht=scontent.fsdu25-1.fna&oh=00_AfCReu-lEYH3YdyZA3pFdO0BnmWcSWRg7XhqgltJ5uiS2w&oe=649AE480",
      name: "Karolyne Brandão",
      role: "Web Designer @ Hidran"
    },
    publishedAt: new Date('2023-05-27 13:56:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: '👉'},
      {type: 'link', content: 'jane.design/doctorcare' },
      {type: 'link', content: '#novoprojeto' },
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'}
    ]
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

