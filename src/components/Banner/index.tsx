import styles from "./banner.module.scss";
import banner from "../../assets/banner/banner.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_image}>
        <Image src={banner} layout="responsive" />
      </div>
    </div>
  );
};

export default Banner;
