import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

import { useState } from 'react'
import { ModalDelete } from '../ModalDelete/ModalDelete';

interface ICommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: ICommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal() {
    setOpenModal(!openModal)
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeCount() {
    setLikeCount((like) => {
      return like + 1
    })
  }
 
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/sirwhod.png" alt={''}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Brandão</strong>
              <time 
                title="25 de maio as 21:57"
                dateTime="2023-05-25"
              >
                Publicado há 1h
              </time>
            </div>

            <button onClick={handleOpenModal} title="Deletar Comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
      <ModalDelete isOpen={openModal} deleteComment={handleDeleteComment}/>
    </div>
  )
}