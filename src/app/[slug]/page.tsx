import Image from "next/image";
import { Menu } from "../components/Menu/Menu";
import styles from "./singlePage.module.css"

export default function SinglePage() {
  return (
    <div className={styles.container}>
		<div className={styles.infoContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Loram impus dolor sit ame consecture adipcitn elite. </h1>
				
				<div className={styles.user}>
					<div className={styles.userImageContainer}>
						<Image src="/p1.jpeg" alt="s" fill className={styles.avatar}/>
					</div>
					<div className={styles.userTextContainer}>
						<span className={styles.usernmae}>John Doe</span>
						<span>01.01.2024</span>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="s" fill className={styles.image}/>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.post}>
				<div className={styles.description}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sapiente assumenda ad? Nulla cum non sequi rem distinctio quis rerum, eveniet blanditiis error fugit saepe facilis unde deleniti maxime. Saepe dolorum, quo eaque rerum officia sed libero quas officiis nisi fuga quibusdam explicabo quae beatae impedit numquam facere nesciunt quis. Fuga ipsum quam accusamus ad hic quisquam inventore reprehenderit, facere, qui ut commodi excepturi dolorum quo atque! Debitis, dolore ducimus aperiam et magni ab tempora assumenda accusamus animi illum quam perferendis impedit eveniet quod, mollitia aliquid quisquam labore cumque rerum! Ducimus porro itaque accusantium dolor voluptate. Enim illum corporis assumenda vitae soluta. Tenetur repudiandae quasi atque nostrum harum laboriosam nulla eum, exercitationem id repellat illo quo aspernatur voluptate dignissimos inventore quod ipsum odio fugit. Nemo, beatae rem? Quam necessitatibus voluptatibus rem mollitia adipisci? Error, dignissimos eaque ducimus sunt ad culpa ex sed esse totam velit, molestiae explicabo odit nesciunt ipsum aut magni veritatis rem commodi necessitatibus pariatur eum beatae voluptates. Nihil nulla recusandae saepe dignissimos dolor labore error, repellat odit eos maiores minima fugiat expedita est officiis cumque quisquam asperiores quos sunt aliquid! Eveniet minima accusamus at sit voluptatem blanditiis, iusto in necessitatibus consequuntur temporibus maiores inventore velit tenetur eligendi? Alias, error! Deleniti quibusdam ipsa exercitationem, atque facilis aliquid saepe et sunt, aperiam consectetur placeat iusto mollitia amet. Neque, fugit?</p>
				</div>
			</div>
			<Menu />
		</div>
    </div>
  );
}
