import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1245815/pub_5c740fefe6ece300b3a765d5_5c74104c513e0c00b3800148/scale_1200" alt="avatar"/>
      <p className={styles.text}>{props.message}</p>
      <span>like{props.likeCount}</span>
    </div>
  );
}

export default Post;