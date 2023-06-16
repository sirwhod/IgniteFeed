import { format, formatDistanceToNow  } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface IAuthor {
  name: string,
  role: string,
  avatarUrl: string
}

interface IContent {
  type: 'paragraph'|'link',
  content: string
}

export interface IPost {
  id: number,
  author: IAuthor,
  publishedAt: Date,
  content: IContent[]
}

interface IPostProps {
  post: IPost
}

export function Post({ post }: IPostProps) {

  // Primeiro argumento é a variavel a ser criada, o segundo é uma função para dizer ao react para atualizar a variável
  const [comments, setComments] = useState<string[]>([]) 
  //Programação declarativa
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'à s' HH:mm'h'", {
    locale: ptBR
  })

  console.log('recalcula')

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments,newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentWithouDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentWithouDeletedOne)
  }

  const isNewCommentEmpety = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time 
        title={publishedDateFormatted}
        dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div> 

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpety}>
            Publicar
          </button>
        </footer>
      </form>


      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
                    <Comment 
                      key={comment} 
                      content={comment} 
                      onDeleteComment={deleteComment} 
                    />
                  )
        })}
      </div>
    </article>
  )
}