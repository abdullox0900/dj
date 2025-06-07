import styles from "./PageLoader.module.css";

export const PageLoader = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-white z-[1000]">
      <span className={styles.loader}></span>
    </div>
  );
};
