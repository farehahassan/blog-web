import Image from 'next/image'
import styles from '@/app/styles/main.module.css'
import Navbar from './components/navbar'

export default function Home() {
  return (
   
      <>
      <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>This is my heading</h1>
          <p>This is some Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure neque, doloribus eligendi eveniet nihil earum natus odit, praesentium quam vel sunt dolore delectus minus saepe quaerat sint consequuntur, quisquam eum quis porro! Facere molestias libero cumque. Nihil quis quibusdam assumenda voluptatem iste at quos dignissimos voluptatum voluptas laborum sint sequi suscipit minima, labore aliquid quasi fuga ipsum dolores minus aperiam quia officia? Nihil fugiat doloribus deserunt velit corrupti praesentium, porro repudiandae voluptate soluta labore error molestiae illum iusto nemo nam mollitia dignissimos vel explicabo. Ipsam nemo officia est porro molestiae optio odit at ipsum eveniet, aut similique, debitis dolor? under the heading.</p>
        </div>
        <div className={styles.image}>
          <Image src="/image1.jpg" alt="Image" width={400} height=
          {400}/>
        </div>
      </div>
    </div>
      </>
  )
}
