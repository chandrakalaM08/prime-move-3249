import styles from "../StyleSheet/TopImage.module.css"

export default function TopImage() {

  const style = {
  bgImg : {
   /* The image used */
   backgroundImage: `url("https://cars.tatamotors.com/images/punch/punch-suv-home.jpg")`,

      minHeight: "480px",
 

  /* Center and scale the image nicely */
   backgroundPosition:" center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
      position: "relative",
   marginTop:"120px"
}
}

  return <div className="bgImg" style={ style.bgImg}>
    <form action="/action_page.php" className={styles.container}>
      <div style={{marginBottom : "15px", color:"white" , fontSize:"23px", fontWeight:"600", width: "500px"}}>
<h1>SELECT YOUR VEHICLE</h1>
    <h3>Customize,Modify,Upgrade,Repair,Replace</h3>
      </div>
  
      <input type="text" placeholder="Year" name="email" required/>
      <input type="text" placeholder="Make" name="psw" required/>
      <input type="text" placeholder="Model" name="psw" required/>
        <button type="submit" className={styles.btn}>Shop Now</button>
  </form>
</div>
}