import styles from './ModalDelete.module.css'

export function ModalDelete({isOpen, deleteComment}) {

  if (isOpen) {
    return (
      <div className={styles.modalFull}>
        <div className={styles.fade}></div>
        <div className={styles.modal}>
            <h1>Excluir comentário</h1>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>
            <footer>
              <button className={styles.cancel}>
                Cancelar
              </button>
              <button className={styles.delete} onClick={deleteComment}>
                Sim, excluir
              </button>
            </footer>
        </div>
      </div>
    )
  } else {
    return null
  }

}