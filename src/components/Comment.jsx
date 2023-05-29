import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/Gabrielrioo.png" hasBorder={false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Rio</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:23'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash sise={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 😍😍</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}